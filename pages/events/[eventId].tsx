import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/data";
import { IEvent } from "@/types";
import { useRouter } from "next/router";
import { Fragment, memo, useMemo } from "react";

const EventDetailPage = memo(() => {
    const { query: { eventId } } = useRouter();
    const event = useMemo(() => getEventById(eventId as string), [eventId]);
    const { date, description, title, location, image } = event as IEvent;

    return event ?
        <Fragment>
            <EventSummary title={title} />
            <EventLogistics date={date} location={location} image={image} imageAlt={title} />
            <EventContent >
                <p>{description}</p>
            </EventContent>
        </Fragment> :
        <h1>No event found </h1>
});

export default EventDetailPage;