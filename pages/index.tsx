import { memo, useCallback } from "react";
import { EventList } from "@/components/events/event-list";
import { useFeaturedEvents } from "@/data";
import { EventSearch } from "@/components/events/events-search";
import { IDateFilter } from "@/types";
import { useRouter } from "next/router";

const HomePage = memo(() => {
    const { push } = useRouter();
    const featuredEvents = useFeaturedEvents();

    const searchEventsHandler = useCallback(({ month, year }: IDateFilter) => {
        const fullPath = `/events/${year}/${month}`;
        push(fullPath);
    }, [push])

    return <div>
        <EventSearch onSearch={searchEventsHandler} />
        <EventList events={featuredEvents} />
    </div>
});

export default HomePage;