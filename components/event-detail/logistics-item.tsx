import { ReactNode, createElement } from 'react';
import classes from './logistics-item.module.css';

interface ILogisticsItemProps {
  icon: () => ReactNode;
  children: ReactNode;
}

function LogisticsItem({ icon: Icon, children }: ILogisticsItemProps) {

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        {createElement(Icon)}
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
