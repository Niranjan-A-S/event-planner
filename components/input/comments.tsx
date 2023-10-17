import { memo, useCallback, useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import React from 'react';
import { IComment, ICommentsProps, IEvent } from '@/types';

function Comments(props: ICommentsProps) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    if (showComments) {
      fetch('/api/comments/' + eventId)
        .then(res => res.json())
        .then(data => setComments(data));
    }
  }, [eventId, showComments])

  const toggleCommentsHandler = useCallback(() => {
    setShowComments((prevStatus) => !prevStatus);
  }, [])

  const addCommentHandler = useCallback(async (comment: any) => {
    try {
      const response = await fetch(`/api/comments/${eventId}`, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      });
      const data = await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  }, [eventId])


  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default memo(Comments);
