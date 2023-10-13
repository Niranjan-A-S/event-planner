import { FC, memo, useMemo } from "react";
import { Button } from "../ui/button";
import classes from './result-title.module.css';

interface IResultTitleProps {
    date: Date;
}

export const ResultTitle: FC<IResultTitleProps> = memo(({ date }) => {

    const humanReadableDate = useMemo(() => new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    }), [date]);

    return (
        <section className={classes.title}>
            <h1>Events in {humanReadableDate}</h1>
            <Button link='/events'>Show all events</Button>
        </section>
    );
});