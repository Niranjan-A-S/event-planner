import { EventList } from "@/components/events/event-list";
import { useAllEvents } from "@/data";
import { memo } from "react";

const AllEventsPage = memo(() => {

    const events = useAllEvents();

    return (
        <div>
            <EventList events={events} />
        </div>
    )
})

export default AllEventsPage;