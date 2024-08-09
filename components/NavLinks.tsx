'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
  { tag: 'Dashboard', href: '/' },
  { tag: 'Users', href: '/users' },
  { tag: 'Tickets', href: '/tickets' },
];

function NavLinks() {
  const currentPath = usePathname();

  return (
    <div className="flex items-center gap-2">
      {links.map((link) => (
        <Link
          className={`"nav-link" ${currentPath == link.href && 'cursor-default text-primary/70 hover:text-primary/60'}`}
          key={link.href}
          href={link.href}
        >
          {link.tag}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
