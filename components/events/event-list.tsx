import { IEvent } from "@/types";
import { FC, memo, useCallback } from "react";
import { EventItem } from "./event-item";
import classes from './event-list.module.css'


interface IEventListProps {
    events: IEvent[];
}

export const EventList: FC<IEventListProps> = memo(({ events }) => {

    const renderEvents = useCallback((event: IEvent) => {
        return <EventItem key={event.id} event={event} />;
    }, []);

    return <ul className={classes.list}>
        {events.map(renderEvents)}
    </ul>
})