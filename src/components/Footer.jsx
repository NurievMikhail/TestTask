import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <svg
          width="33"
          height="64"
          viewBox="0 0 33 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.001 1.184C32.0654 0.608 32.001 0.672 31.7757 0.16C31.7113 0.064 31.6147 0 31.4859 0C31.1318 0 30.5523 0.448 30.2304 0.8C28.0412 3.232 25.3692 7.328 23.9527 7.808C23.2445 8.064 22.5684 6.816 22.0855 6.368C20.1539 4.48 17.6751 2.368 13.6509 1.12C11.5262 0.416 9.72334 -0.192 9.04729 0.128C7.79175 0.704 9.59457 1.856 10.3028 2.624C10.8501 3.2 11.4618 3.136 12.1056 2.848C12.5885 2.656 13.168 2.656 13.6509 2.848C17.2887 4.32 19.3491 5.728 21.4417 7.968C22.1177 8.736 22.5362 9.696 21.8924 10.304C19.7354 12.384 17.4819 14.592 15.3571 16.704C14.8742 17.184 14.2948 17.824 13.6831 17.792C13.2968 17.76 12.6851 17.344 12.331 17.12C11.7193 16.704 11.172 16.48 10.5926 16.032C10.0775 15.648 9.98089 15.296 9.9487 14.656C9.9165 13.6 10.174 12.704 10.335 11.904C10.5926 10.464 10.9145 9.024 11.2042 7.552C11.4296 6.432 11.5584 4.992 11.4618 3.808C11.3652 3.52 10.8823 3.456 10.5604 3.68C10.4316 4.288 10.4316 4.288 10.3028 4.928C10.174 5.6 10.0453 6.816 9.9165 7.488C9.53018 9.6 9.01509 11.2 8.66097 13.952C8.59658 14.368 8.5 15.072 8.43562 15.584C8.37123 16.288 8.59658 17.152 8.37123 17.6C8.08149 18.24 7.82395 18.752 7.98491 19.616C8.11369 20.448 7.92053 20.672 7.40544 21.088C6.66499 21.696 5.02314 22.912 4.08954 23.456C3.57445 23.776 2.93059 24.384 3.31691 25.024C3.67103 25.664 4.47586 25.792 5.18411 25.824C6.27868 25.888 7.66298 24.48 8.72536 24.256C9.14387 24.16 9.72334 24 10.0775 24.288C10.5282 24.608 10.6248 25.12 10.7213 25.632C11.1398 27.552 11.0111 28.544 10.8823 30.592C10.7857 31.808 10.496 34.016 10.0775 35.168C9.75554 36.064 9.43361 36.448 8.69316 37.088C8.01711 37.664 7.21228 38.464 6.98693 39.872C6.89035 40.544 7.34105 42.144 6.6328 43.968C5.95674 45.696 5.86017 46.08 5.15192 47.712C4.79779 48.544 4.44367 49.568 4.05735 50.592C3.38129 52.384 3.28471 52.256 2.73743 54.08C2.44769 55.072 1.99699 56.512 1.70725 57.504C1.19216 59.136 1.38532 59.04 0.580488 60.704C0.355136 61.12 -0.256534 62.432 0.19417 63.264C0.387329 63.616 0.90242 64 1.28874 64C1.32093 64 1.35312 64 1.38532 64C2.19015 63.808 2.80182 63.52 3.18813 62.72C3.54226 61.984 3.3491 60.928 3.60664 60.16C4.18612 58.4 4.7656 56.608 5.53823 54.912C6.37526 53.088 6.27868 52.384 7.01912 50.464C7.82395 48.288 8.37123 46.944 9.53018 44.96C10.9145 42.624 14.5201 39.456 16.0654 38.336C18.4799 36.64 19.993 35.52 19.671 37.472C19.4135 39.136 16.5805 43.296 15.9688 44.672C15.6469 45.344 15.6147 46.048 15.9044 46.624C16.2586 47.36 17.0634 48.352 17.8682 48.288C18.6087 48.256 19.2525 47.264 19.0272 46.56C18.7374 45.696 18.7052 45.056 19.7676 43.008C21.0875 40.48 23.1801 36.864 22.7938 33.696C22.665 32.544 21.2807 31.968 20.1539 32.352C18.8662 32.8 16.7415 34.496 15.4215 35.2C14.5201 35.68 13.8763 35.872 13.7797 34.912C13.6831 34.016 13.8763 32.96 13.9406 32.032C14.2304 28.736 14.0372 27.552 14.3592 24.64C14.4557 23.808 15.2928 22.688 16.001 23.328C18.2545 25.312 21.1519 27.616 23.4054 29.408C24.339 30.144 24.7575 30.784 25.2083 32.096C25.4336 32.736 25.2404 33.696 25.0151 34.592C24.9185 35.008 25.1117 35.616 26.0131 35.008C28.1056 32.192 29.5221 27.616 29.5221 24.064C29.5543 20.928 29.9084 17.536 26.5282 12.032C25.9809 11.136 24.6932 9.152 25.9487 7.84C27.7193 5.92 31.2284 2.688 32.001 1.184ZM27.7515 20.48C27.8481 21.696 27.8803 22.624 27.8803 23.84C27.8803 24.64 27.5905 25.632 27.4296 26.72C27.333 27.456 27.2686 28.512 26.9145 29.568C26.8501 29.728 26.6569 30.208 26.3028 30.208C25.9165 30.24 25.7877 29.728 25.5946 29.504C24.9185 28.736 24.3712 28 23.6308 27.392C22.9225 26.848 21.7314 26.016 20.9588 25.536C20.2505 25.056 19.5101 24.256 18.8018 23.744C18.0614 23.2 17.3853 22.688 16.7093 22.048C16.5161 21.888 16.2907 21.6 16.1942 21.408C16.0332 21.024 16.0332 20.544 16.162 20.192C16.3229 19.648 16.6771 19.168 16.999 18.688C17.4175 18.08 17.8682 17.504 18.3511 16.96C18.6408 16.64 19.1237 16.192 19.4779 15.968C20.0252 15.648 20.2505 15.552 20.7012 15.104C21.1519 14.688 21.1197 14.272 21.5704 13.824C22.0211 13.376 22.5684 12.512 23.1157 12.128C23.341 11.968 23.7274 11.808 23.9849 11.936C24.339 12.064 24.6932 12.512 24.8863 12.832C26.3672 15.456 27.5262 17.632 27.7515 20.48Z"
            fill="#1F4766"
          />
        </svg>
        <div className="footer__text">
          <span>
            426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)
          </span>
          <span>+7 (3412) 93-88-61, 43-29-29</span>
          <a href="https://htc-cs.ru/">htc-cs.ru</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
