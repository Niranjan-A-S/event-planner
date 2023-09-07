import { ReactNode, createElement } from 'react';
import classes from './logistics-item.module.css';

interface ILogisticsItemProps {
  icon: () => ReactNode;
  children: ReactNode;
}

function LogisticsItem(props: ILogisticsItemProps) {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        {createElement(Icon)}
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
