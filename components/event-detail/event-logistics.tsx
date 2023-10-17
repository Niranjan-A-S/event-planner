import Image from 'next/image';
import { useMemo } from 'react';
import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import classes from './event-logistics.module.css';
import LogisticsItem from './logistics-item';


interface IEventLogisticsProps {
  date: string;
  location: string;
  image: string;
  imageAlt: string;
}

function EventLogistics({ date, location, image, imageAlt }: IEventLogisticsProps) {

  const humanReadableDate = useMemo(() => new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }), [date]);

  const addressText = useMemo(() => location.replace(', ', '\n'), [location]);

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image loading="lazy" src={image} alt={imageAlt} width={250} height={160} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
