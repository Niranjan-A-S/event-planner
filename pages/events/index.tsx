import { EventList } from "@/components/events/event-list";
import { EventSearch } from "@/components/events/events-search";
import { IDateFilter, IEventListPageProps } from "@/types";
import { getAllEvents } from "@/utils/api-helpers";
import Head from "next/head";
import { useRouter } from "next/router";
import { memo, useCallback } from "react";

const AllEventsPage = memo((props: IEventListPageProps) => {
    const router = useRouter();

    const searchEventsHandler = useCallback(({ month, year }: IDateFilter) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }, [router]);

    return (
        <>
            <EventSearch onSearch={searchEventsHandler} />
            <Head>
                <title>All Events</title>
                <meta name="description" content="Find a lot of great events that allow you to evolve..." />
            </Head>
            <EventList events={props?.events} />
        </>
    )
})

export default AllEventsPage;

export const getStaticProps = async () => {

    const events = Object.values(await getAllEvents());

    return {
        props: {
            events
        }
    }
}