import { useEffect, useState } from "react"
import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first meetup',
    image: 'https://www.peerspace.com/resources/wp-content/uploads/picnic-1208229_1280-1200x600.webp',
    address: '123 main st, some suburb',
    description: 'This is a first meetup'
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image: 'https://images.squarespace-cdn.com/content/v1/603709c4fe10c7013cc59c86/1636558970768-NS81KU5BXCPZIPFTJ09P/unsplash-image-3SBfM2-ytb8.jpg',
    address: '456 secondary st, some suburb',
    description: 'This is a second meetup'
  }
]

function HomePage({meetups}) {
  
  return <MeetupList meetups={meetups} />
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

export default HomePage