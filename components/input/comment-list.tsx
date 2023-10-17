import React, { Fragment, memo } from 'react';
import classes from './comment-list.module.css';
import { IComment } from '@/types';

function CommentList({ comments }: { comments: IComment[] }) {
  return (
    <ul className={classes.comments}>
      {comments.length ? comments.map(({ id, name, text }) => <li key={id}>
        <p>{text}</p>
        <div>
          By <address>{name}</address>
        </div>
      </li>
      ) :
        <strong>No Comments</strong>}
    </ul>
  );
}

export default memo(CommentList);
