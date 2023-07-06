import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div className='flex justify-start bg-gray-200 p-2 text-xl'>
      <header>
        <nav className=''>
          <div>
            <Link to='/'>Student Management Application</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
