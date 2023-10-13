import { IDateFilter, IEvent } from "@/types";

export const getAllEvents = async () => {
    const response = await fetch('https://nextjs-course-ab106-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();
    return Object.values(data) as IEvent[];
}

export const getFeaturedEvents = async () => {
    const allEvents = await getAllEvents() as IEvent[];
    return allEvents.filter(({ isFeatured }: IEvent) => isFeatured)
}

export const getEventById = async (eventId: string) => {
    const allEvents = await getAllEvents() as IEvent[];
    return allEvents.find(({ id }) => eventId === id);
}

export async function getFilteredEvents(dateFilter: IDateFilter) {
    const allEvents = await getAllEvents() as IEvent[];
    const { year, month } = dateFilter;

    let filteredEvents = allEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}
