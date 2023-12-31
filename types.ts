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
    year: number;
    month: number;
}

export interface IEventListPageProps {
    events: IEvent[]
}

export interface IDetailedEventPageProps {
    event: IEvent;
}

export interface ICommentsProps {
    eventId: string;
}

export interface INewCommentProps {
    onAddComment: any
}

export interface IComment {
    name: string;
    email: string;
    text: string;
    id: string;
}

export type Status = 'pending' | 'success' | 'error';

export interface INotificationProps {
    title: string;
    message: string;
    status: Status;
}



export interface INotificationContext {
    notification: INotificationProps | null;
    showNotification: (notificationData: INotificationProps) => void;
    hideNotification: () => void;
}
