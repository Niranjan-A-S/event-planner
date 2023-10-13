import { FC, ReactNode, memo } from "react";
import classes from './error-alert.module.css';

interface IErrorAlertProps {
    children: ReactNode;
}

export const ErrorAlert: FC<IErrorAlertProps> = memo(({ children }) => {
    return <div className={classes.alert}>{children}</div>;
})