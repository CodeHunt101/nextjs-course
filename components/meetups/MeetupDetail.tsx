import classes from './MeetupDetail.module.css'
import { MeetupDetailsProps } from '../../pages/[meetupId]'


function MeetupDetail({image, title, address, description}: MeetupDetailsProps["meetupData"]) {
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  )
}

export default MeetupDetail