import MeetupDetail from "../../components/meetups/MeetupDetail"

function MeetupDetails({meetupData}) {
  return (
    <MeetupDetail
      image="https://www.peerspace.com/resources/wp-content/uploads/picnic-1208229_1280-1200x600.webp"
      title="A first meetup"
      address="123 main st, some suburb"
      description="The meetup description"
    />
  )
}

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  }
}

export const getStaticProps = async (context) => {
  // fetch data for a single meetup
  // console.log('HEY==>',context.params.meetupId)
  const meetupId = context.params.meetupId

  console.log(context)

  return {
    props: {
      meetupData: {
        image:
          "https://www.peerspace.com/resources/wp-content/uploads/picnic-1208229_1280-1200x600.webp",
        id: meetupId,
        title: "A first meetup",
        address: "123 main st, some suburb",
        description: "The meetup description",
      },
    },
  }
}

export default MeetupDetails
