import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="notFound">
    <p className="notFound__label">404</p>
    <p className="notFound__text">
      Oops, we can't seem to find the page you're looking for.
    </p>
    <Link to="/" className="notFound__link">
      Go Home
    </Link>
  </div>
);

export default NotFound;
