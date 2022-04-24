import MeetupDetail from "../../components/meetups/MeetupDetail"
import {MongoClient, ObjectId} from "mongodb"

function MeetupDetails({meetupData}) {
  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  )
}

export const getStaticPaths = async () => {
  
  const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a28iu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
  const db = client.db()
  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray()
  client.close()
  
  return {
    fallback: false,
    paths: meetups.map(meetup => ({ 
      params: { meetupId: meetup._id.toString() } 
    }))
  }
}

export const getStaticProps = async (context) => {
  // fetch data for a single meetup
  // console.log('HEY==>',context.params.meetupId)
  const meetupId = context.params.meetupId

  const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a28iu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)})

  client.close()

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description
      },
    },
  }
}

export default MeetupDetails
