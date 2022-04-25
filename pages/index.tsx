import Head from 'next/head'
import MongoClient from 'mongodb/lib/mongo_client'
import MeetupList from '../components/meetups/MeetupList'
import { ComponentProps } from 'react'

type HomePageProps = {
  meetups: {
    title: string
    address: string
    image: string
    _id: string
  }[]
}

function HomePage({ meetups }: HomePageProps) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active meetups"
        ></meta>
      </Head>
      <MeetupList meetups={meetups} />
    </>
  )
}
export default HomePage
// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps(): Promise<{
  props: ComponentProps<typeof HomePage>
  revalidate: number
}> {
  // fetch data from an API

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a28iu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  const db = client.db()
  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray()
  client.close()

  return {
    props: {
      meetups: meetups.map(
        (meetup: {
          title: string
          address: string
          image: string
          _id: { toString: () => unknown }
        }) => ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        })
      ),
    },
    revalidate: 1,
  }
}
