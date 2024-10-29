import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <div className='header'>
      <Link to='/'>
        <h3 className='nav-title'>국내 박스 오피스 top 10!</h3>
      </Link>
    </div>
  );
}