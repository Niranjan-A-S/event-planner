export interface IEvent {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
    isFeatured: boolean;
}

export interface IDateFilter {
    year: string;
    month: string;
}