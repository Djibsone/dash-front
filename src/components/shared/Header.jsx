import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="bg-white shadow rounded-md">
    {/* <header className="bg-white shadow fixed w-full z-10"> */}
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
      </div>
    </header>
  )
}

export default Header;

