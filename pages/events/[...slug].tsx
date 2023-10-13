/* eslint-disable react-hooks/rules-of-hooks */
import { EventList } from "@/components/events/event-list";
import { ResultTitle } from "@/components/events/result-title";
import { Button } from "@/components/ui/button";
import { ErrorAlert } from "@/components/ui/error-alert";
import { IDateFilter, IEvent } from "@/types";
import { getFilteredEvents } from "@/utils/api-helpers";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, createElement, memo, useCallback, useMemo } from "react";

interface IFilteredEventsPageProps extends IDateFilter {
    hasError: boolean;
    events: IEvent[];
}

const FilteredEventsPage = memo((props: IFilteredEventsPageProps) => {

//!Here in this page you can add the client side data fetching also. But it is similar to what we did in the tutorial project
    const router = useRouter();
    const filterData = router.query.slug as (string | number)[]
    if (!filterData) {
        return <p className="center">Loading...</p>
    }

    const renderErrorBody = useCallback((errorMessage: string) => {
        return (
            <>
                <ErrorAlert>
                    <p>{errorMessage}</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </>
        );
    }, [])

    if (props?.hasError) {
        return renderErrorBody('Invalid filter. Please adjust your values!');
    }

    if (!props?.events.length) {
        return renderErrorBody('No events found for this date filter');
    }

    const date = new Date(props.year as number, props.month as number - 1);
    return (
        <Fragment>
            <Head>
                <title>Filtered Events</title>
                <meta name="description" content={`All events for ${date.toLocaleDateString()}`} />
            </Head>
            <ResultTitle date={date} />
            <EventList events={props?.events} />
        </Fragment>
    );
});

export default FilteredEventsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params } = context;
    const filterData = params?.slug as (string | number)[];
    let [year, month] = filterData;
    year = +year;
    month = +month;

    if (
        isNaN(year) ||
        isNaN(month) ||
        year > 2030 ||
        year < 2021 ||
        month < 1 ||
        month > 12
    ) {
        return {
            props: {
                hasError: true
            }
        };
    }

    const filteredEvents = await getFilteredEvents({ year, month });

    return {
        props: {
            events: filteredEvents,
            year,
            month,
        }
    }
}