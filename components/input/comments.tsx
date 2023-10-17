import { memo, useCallback, useContext, useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import React from 'react';
import { IComment, ICommentsProps, IEvent } from '@/types';
import { NotificationContext } from '@/store/notification-context';

function Comments(props: ICommentsProps) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<IComment[]>([]);
  const { showNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (showComments) {
      showNotification({ title: 'Fetching', status: 'pending', message: 'Fetching comments' });
      fetch('/api/comments/' + eventId)
        .then(res => {
          if (!res.ok) throw new Error(res.statusText);
          showNotification({
            title: 'Success!',
            status: 'success',
            message: 'Successfully fetched comments',
          })
          return res.json();
        }).then(data => setComments(data))
        .catch(error => {
          showNotification({
            title: 'Error!',
            status: 'error',
            message: error?.message || 'Something went wrong!',
          })
        })
    }
  }, [eventId, showComments, showNotification])

  const toggleCommentsHandler = useCallback(() => {
    setShowComments((prevStatus) => !prevStatus);
  }, []);



  const addCommentHandler = useCallback(async (comment: any) => {
    showNotification({ title: 'Posting', status: 'pending', message: 'Posting your comment' });
    try {
      const response = await fetch(`/api/comments/${eventId}`, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      });
      if (!response.ok) throw new Error(response.statusText);
      showNotification({ title: 'Success!', status: 'success', message: 'Successfully posted comment' });
    } catch (error: any) {
      showNotification({
        title: 'Error!',
        status: 'error',
        message: error?.message || 'Something went wrong!',
      })
      console.error('Error:', error);
    }
  }, [eventId, showNotification])


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
