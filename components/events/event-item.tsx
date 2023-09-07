import { IEvent } from "@/types";
import Link from "next/link";
import { FC, memo, useMemo } from "react";
import classes from './event-item.module.css'
import { Button } from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

interface IEventItemProps {
    event: IEvent;
}

export const EventItem: FC<IEventItemProps> = memo(({ event: { date, title, image, location, id } }) => {

    const humanReadableDate = useMemo(() => new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }), [date]);

    const formattedAddress = useMemo(() => location.replace(", ", "\n"), [location]);
    const exploreLink = useMemo(() => `/events/${id}`, [id]);

    return <li className={classes.item}>
        <img src={image} alt={title} />
        <div>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <DateIcon />
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon />
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                    <span className={classes.icon}><ArrowRightIcon /></span>
                </Button>
            </div>
        </div>
    </li>
})