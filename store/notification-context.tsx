import { INotificationContext, INotificationProps } from "@/types";
import { createContext, memo, ReactNode, useCallback, useState } from "react";

export const NotificationContext = createContext({} as INotificationContext);


export const NotificationContextProvider = memo(({ children }: { children: ReactNode }) => {

    const [notification, setNotification] = useState<INotificationProps | null>(null);

    const hideNotification = useCallback(() => {
        setNotification(null);
    }, [])

    const showNotification = useCallback((notificationData: INotificationProps) => {
        setNotification(notificationData)
    }, [])

    return <NotificationContext.Provider value={{ notification, showNotification, hideNotification }}>
        {children}
    </NotificationContext.Provider>
});