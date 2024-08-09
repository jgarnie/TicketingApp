import Link from 'next/link';
import React from 'react';
import ToggleMode from './ToggleMode';
import NavLinks from './NavLinks';

const MainNav = () => {
  return (
    <div className="flex justify-between">
      <NavLinks />
      <div className="flex items-center gap-2">
        <Link className="nav-link" href="/">
          Logout
        </Link>
        <ToggleMode />
      </div>
    </div>
  );
};

export default MainNav;
