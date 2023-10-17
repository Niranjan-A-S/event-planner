import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import Comments from "@/components/input/comments";
import { IDetailedEventPageProps } from "@/types";
import { getEventById, getFeaturedEvents } from "@/utils/api-helpers";
import Head from "next/head";
import { GetStaticProps } from "next/types";
import { memo } from "react";

const EventDetailPage = memo((props: IDetailedEventPageProps) => {
    const event = props?.event;

    if (!event) {
        return <div className="center">
            <p>Loading...</p>
        </div>
    }

    const { date, description, image, location, title, id } = event;

    //!dynamic contents inside head
    return <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <EventSummary title={title} />
        <EventLogistics
            date={date}
            location={location}
            image={image}
            imageAlt={title}
        />
        <EventContent >
            <p>{description}</p>
        </EventContent>
        <Comments eventId={id} />
    </>
});

export default EventDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const event = await getEventById(params?.eventId as string);

    return {
        props: {
            event
        },
        revalidate: 30
    }
}

export const getStaticPaths = async () => {
    const featuredEvents = await getFeaturedEvents();

    const paths = featuredEvents.map(({ id }) => ({
        params: {
            eventId: id
        }
    }));

    return {
        paths,
        fallback: 'blocking',
    }
}