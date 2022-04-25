// our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Head from 'next/dist/next-server/lib/head'
import { useRouter } from 'next/router'

function NewMeetupPage() {
  const router = useRouter()

  async function addMeetupHandler(enteredMeetupData: {
    title: string
    address: string
    image: string
    description: string
  }) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    console.log(data)

    router.push('/')
  }

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities"
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  )
}

export default NewMeetupPage
