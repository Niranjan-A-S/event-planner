import { EventList } from "@/components/events/event-list";
import NewsletterRegistration from "@/components/input/newsletter-registration";
import { IEventListPageProps } from "@/types";
import { getFeaturedEvents } from "@/utils/api-helpers";
import Head from "next/head";
import { memo } from "react";

//!We can append the contents inside the head tag using Head
const HomePage = memo((props: IEventListPageProps) => {

    return <div>
        <Head>
            <title>Events Planner</title>
            <meta name="description" content="Find a lot of great events that allow you to evolve..." />
        </Head>
        <NewsletterRegistration />
        <EventList events={props?.events} />
    </div>
});

export default HomePage;

export const getStaticProps = async () => {
    const events = await getFeaturedEvents();
    return {
        props: {
            events
        },
        revalidate: 1800
    }
}