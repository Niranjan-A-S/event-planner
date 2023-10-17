import { memo, useCallback, useState } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {

  const [email, setEmail] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const registrationHandler = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })
  }, [email])

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
