import { FC, memo, ReactNode } from "react";
import Link from "next/link";
import classes from './button.module.css';

interface IButtonProps {
    children: ReactNode;
    link?: string;
    onClick?: (event: any) => void;
}

export const Button: FC<IButtonProps> = memo(({ children, link, onClick }) =>
    link
        ? <Link className={classes.btn} href={link} >{children}</Link>
        : <button onClick={onClick} className={classes.btn}>{children}</button>
)