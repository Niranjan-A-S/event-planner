import { EventList } from "@/components/events/event-list";
import { useFilteredEvents } from "@/data";
import { useRouter } from "next/router";
import { memo } from "react";

const FilteredEventsPage = memo(() => {
    const router = useRouter();
    const filterData = router.query.slug as string[]
    const [year, month] = filterData;
    const filteredEvents = useFilteredEvents({ year, month });

    return <>
        {filterData ? <EventList events={filteredEvents} /> : <p className="center">Loading</p>}
    </>;
});

export default FilteredEventsPage;