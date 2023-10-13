import { ComponentProps, FC, Fragment, memo } from "react"
import { MainHeader } from "./main-header";

const Layout: FC<ComponentProps<any>> = memo(({ children }) => {
    return <>
        <MainHeader />
        <main>{children}</main>
    </>
})

export default Layout;