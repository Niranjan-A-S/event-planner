import { memo, useContext, useEffect, useMemo } from 'react';

import classes from './notification.module.css';
// import NotificationContext from '../../store/notification-context';
import { INotificationProps } from '@/types';
import { NotificationContext } from '@/store/notification-context';

function Notification(props: INotificationProps) {
    const { hideNotification } = useContext(NotificationContext);
    const { title, message, status } = props;

    useEffect(() => {
        if (status === 'success') {
            const timerId = setTimeout(hideNotification, 2000);
            return () => {
                clearTimeout(timerId);
            }
        }
    }, [hideNotification, status])


    const statusClasses = useMemo(() => classes[status === 'success' ? 'success' : status === 'error' ? 'error' : 'pending'], [status]);

    const activeClasses = useMemo(() => `${classes.notification} ${statusClasses}`, [statusClasses]);

    return (
        <div className={activeClasses} onClick={hideNotification}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
}

export default memo(Notification);