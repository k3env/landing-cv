import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

export function Analytics() {
  const [cookies, setCookie] = useCookies(['visitor']);
  const t = Date.now();
  const payload = {
    agent: window.navigator.userAgent,
    timestamp: t,
  };
  if (!cookies.visitor) {
    payload.firstVisit = true;
    payload.visitor = crypto.randomUUID();
  } else {
    payload.firstVisit = false;
    payload.visitor = cookies.visitor;
  }
  useEffect(() => {
    fetch(import.meta.env.VITE_ANALYTICS_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    }).then(() => {
      if (payload.firstVisit) {
        setCookie('visitor', payload.visitor);
      }
    });
  });
  return <div />;
}
