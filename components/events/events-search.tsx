import { FC, memo, useCallback, useState } from "react";
import { Button } from "../ui/button";
import classes from "./events-search.module.css";
import { months } from "@/data";
import { IDateFilter } from "@/types";

interface IEventSearchProps {
    onSearch: (dateFilter: IDateFilter) => void;
}
export const EventSearch: FC<IEventSearchProps> = memo(({ onSearch }) => {

    const renderMonths = useCallback((name: string, value: number) => (
        <option key={name} value={String(value + 1)}>{name}</option>
    ), []);

    const [dateFilter, setDateFilter] = useState<IDateFilter>({ month: '1', year: '2021' });
    const onChange = useCallback(({ target: { value, name } }: any) => {
        setDateFilter({ ...dateFilter, [name]: value });
    }, [dateFilter]);

    const handleSubmit = useCallback((event: any) => {
        event.preventDefault();
        onSearch(dateFilter);
    }, [dateFilter, onSearch]);

    return <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
            <div className={classes.control}>
                <label htmlFor="year">Year</label>
                <select onChange={onChange} name="year" id="year" value={dateFilter.year}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor="month">Year</label>
                <select onChange={onChange} name="month" id="month" value={dateFilter.month}>
                    {months.map(renderMonths)}
                </select>
            </div>
        </div>
        <Button >Get Events</Button>
    </form>
});