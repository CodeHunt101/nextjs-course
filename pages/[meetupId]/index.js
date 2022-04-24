import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails() {
  return (
    <MeetupDetail 
    image="https://www.peerspace.com/resources/wp-content/uploads/picnic-1208229_1280-1200x600.webp" 
    title="A first meetup"
    address="123 main st, some suburb"
    description="The meetup description"
    />
  )
}

export default MeetupDetails

{/* <>
      <img src="https://www.peerspace.com/resources/wp-content/uploads/picnic-1208229_1280-1200x600.webp" alt="A first meetup" />
      <h1>A first meetup</h1>
      <address>123 main st, some suburb</address>
      <p>The meetup description</p>
    </> */}