import { IEvent } from '@/types';
import classes from './event-summary.module.css';

function EventSummary({ title }: Pick<IEvent, 'title'>) {

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;