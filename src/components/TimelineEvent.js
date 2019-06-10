import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // Fill in your code here
  return (
    <section className="timeline-event">
      <h3 className="event-person">{props.person}</h3>
      <h4 className="event-status">{props.status}</h4>
      <Timestamp className="event-time" time={props.time} />
    </section>
  );
}

export default TimelineEvent;
