import { Script } from 'gatsby';
import React from 'react';

const Scripts = () => {
  return (
    <>
      {/* <noscript>
        <img
          height="1"
          width="1"
          style={{
            display: 'none',
          }}
          src="https://www.facebook.com/tr?id=5209032532528271&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W4T6PP6"
          height="0"
          width="0"
          title="googletagmanager"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript> */}
      <Script strategy="post-hydrate">
        {`
          if (typeof window !== 'undefined') {
            if (window.fbq != null) {
              window.fbq('track', 'PageView');
              console.log('connect fbq');
            }
            console.log('has window');
          }
        `}
      </Script>
    </>
  );
};

export default Scripts;
