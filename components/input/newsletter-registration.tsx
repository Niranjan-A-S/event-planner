import { memo, useCallback, useContext, useState } from 'react';
import classes from './newsletter-registration.module.css';
import { NotificationContext } from '@/store/notification-context';

function NewsletterRegistration() {

  const [email, setEmail] = useState<string>('');
  const { showNotification } = useContext(NotificationContext);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const registrationHandler = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    showNotification({ title: 'Signing Up...', status: 'pending', message: 'Registering for newsletter.' });
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      })
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      showNotification({ title: 'Success!', status: 'success', message: 'Successfully registered for newsletter.' });
    } catch (error: any) {
      showNotification({ title: 'Registration failed', status: 'error', message: error?.message || 'Something went wrong!' });
    }
  }, [email, showNotification])

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            value={email}
            onChange={handleChange}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default memo(NewsletterRegistration);
