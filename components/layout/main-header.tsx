import Link from "next/link";
import { memo } from "react";

import classes from "./main-header.module.css";

export const MainHeader = memo(() =>
    <header className={classes.header}>
        <div className={classes.logo}>
            <Link href="/">Next Events</Link>
        </div>
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <Link href="/events">Browse all events</Link>
                </li>
            </ul>
        </nav>
    </header>
);
