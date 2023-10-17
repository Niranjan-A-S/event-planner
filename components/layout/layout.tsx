import { ComponentProps, FC, Fragment, memo, useContext } from "react"
import { MainHeader } from "./main-header";
import Notification from '@/components/ui/notification'
import { NotificationContext } from "@/store/notification-context";
import { Status } from "@/types";

const Layout: FC<ComponentProps<any>> = memo(({ children }) => {

    const { notification } = useContext(NotificationContext);

    return <>
        <MainHeader />
        <main>{children}</main>
        {notification ? <Notification title={notification?.title} message={notification?.message} status={notification?.status} /> : null}
    </>
})

export default Layout;