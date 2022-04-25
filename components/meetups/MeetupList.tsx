import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList({meetups}) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup: { id: string; image: string; title: string; address: string; }) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
