import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer">
    <p className="footer__message">
      Made with <span className="message--red">&#x2665;</span> by&nbsp;
      <a href="https://github.com/marcoescaleira" className="message__name">
        Marco Escaleira
      </a>&nbsp;
      &&nbsp;
      <a href="https://github.com/MarceloSilva00" className="message__name">
        Marcelo Silva
      </a>
    </p>
  </footer>
);

export default Footer;
