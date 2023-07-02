import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect, useRef } from 'react';

function NewsletterSignup() {
    const fetcher = useFetcher();
    const {data, state} = fetcher;
    const inputValue = useRef("");

    useEffect(() => {
        if (state === 'idle' && data && data.message) {
            window.alert(data.message)
            inputValue.current.value = ''
        }
    }, [data, state, inputValue])
  return (
    <fetcher.Form method="post" action='/newsletter' className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        ref={inputValue}
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
