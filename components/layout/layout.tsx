import { ComponentProps, FC, Fragment, memo } from "react"
import { MainHeader } from "./main-header";

const Layout: FC<ComponentProps<any>> = memo(({ children }) => {
    return <Fragment>
        <MainHeader />
        <main>{children}</main>
    </Fragment>
})

export default Layout;