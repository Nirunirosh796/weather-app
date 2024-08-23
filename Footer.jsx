import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white text-center p-4'>
      <p className="text-sm mb-1">
        © {new Date().getFullYear()} Weather App. All rights reserved.
      </p>
      <p className="text-xs">
        Designed and developed by Niroshan
      </p>
    </footer>
  );
}

export default Footer;
