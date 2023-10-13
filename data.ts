import { IDateFilter, IEvent } from "./types";

const DUMMY_EVENTS: Array<IEvent> = [
    {
        id: 'e1',
        title: 'Programming for everyone',
        description:
            'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
        location: 'Somestreet 25, 12345 San Somewhereo',
        date: '2021-05-12',
        image: '/images/coding-event.avif',
        isFeatured: false,
    },
    {
        id: 'e2',
        title: 'Networking for introverts',
        description:
            "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
        location: 'New Wall Street 5, 98765 New Work',
        date: '2021-05-30',
        image: '/images/introvert-event.jpg',
        isFeatured: true,
    },
    {
        id: 'e3',
        title: 'Networking for extroverts',
        description:
            'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
        location: 'My Street 12, 10115 Broke City',
        date: '2022-04-10',
        image: '/images/extrovert-event.jpg',
        isFeatured: true,
    },
    {
        id: 'e4',
        title: 'Web Development Conference',
        description: 'Join us for the biggest web development conference of the year!',
        location: '123 Main Street, Anytown, USA',
        date: '2022-05-20',
        image: '/images/dean-pugh-C8NDn4xk9zs-unsplash.jpg',
        isFeatured: true,
    },
    {
        id: 'e5',
        title: 'Machine Learning Workshop',
        description: 'Learn the fundamentals of machine learning in this hands-on workshop.',
        location: '456 Elm Street, Somewhere, USA',
        date: '2022-06-15',
        image: '/images/jeswin-thomas-q2BpMaqzDNQ-unsplash.jpg',
        isFeatured: true,
    },
    {
        id: 'e6',
        title: 'Data Science Summit',
        description: 'Discover the latest trends and techniques in data science at this summit.',
        location: '789 Oak Street, Anywhere, USA',
        date: '2022-09-05',
        image: '/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg',
        isFeatured: true,
    },
    {
        id: 'e7',
        title: 'Frontend Development Bootcamp',
        description: 'Master the art of frontend development in this intensive bootcamp.',
        location: '321 Pine Street, Nowhere, USA',
        date: '2021-12-01',
        image: '/images/teemu-paananen-bzdhc5b3Bxs-unsplash.jpg',
        isFeatured: true,
    },
    {
        id: 'e8',
        title: 'AI and Robotics Conference',
        description: 'Explore the intersection of AI and robotics at this unique conference.',
        location: '654 Cedar Street, Everywhere, USA',
        date: '2022-07-10',
        image: '/images/lukas-hND1OG3q67k-unsplash.jpg',
        isFeatured: true,
    },
    {
        id: 'e9',
        title: 'Cybersecurity Workshop',
        description: 'Learn how to protect your systems from cyber threats in this workshop.',
        location: '987 Maple Street, Nowhere, USA',
        date: '2021-11-15',
        image: '/images/adi-goldstein-EUsVwEOsblE-unsplash.jpg   ',
        isFeatured: true,
    },
    {
        id: 'e10',
        title: 'Big Data Summit',
        description: 'Discover the power of big data analytics at this summit.',
        location: '543 Elm Street, Anytown, USA',
        date: '2022-08-20',
        image: '/images/claudio-schwarz-fyeOxvYvIyY-unsplash.jpg',
        isFeatured: true,
    }
];

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function useFilteredEvents(dateFilter: IDateFilter) {
    const { year, month } = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}
