import MongoClient from "mongodb/lib/mongo_client"
import MeetupList from "../components/meetups/MeetupList"

function HomePage({meetups}) {
  return <MeetupList meetups={meetups} />
}

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

export async function getStaticProps() {
  // fetch data from an API
  
  const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a28iu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
  const db = client.db()
  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray()
  client.close()

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1
  }
}

export default HomePage