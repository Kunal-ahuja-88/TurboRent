"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { links } from '@/constants/appdata';
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className='bg-white shadow-lg h-16 flex justify-between items-center md:px-[10%]'>
      <Link href="/" className='font-bold text-2xl pl-5 md:pl-0 text-third-color'>
        TurboRent
      </Link>
      <div
        className="md:hidden flex flex-col gap-1 pr-5 cursor-pointer hover:shadow-md"
        onClick={() => setIsMenu(!isMenu)}
      >
        <div className="w-5 h-0.5 bg-black"></div>
        <div className="w-5 h-0.5 bg-black"></div>
        <div className="w-5 h-0.5 bg-black"></div>
      </div>

      <div
        className={`${
          isMenu ? "flex font-bold" : "hidden"
        } flex-col font-bold absolute top-16 left-0 w-full bg-white z-10 md:flex md:flex-row md:static md:w-auto md:bg-transparent`}
      >
        {links?.map((link) => (
          <div key={link.link} className="py-2 md:py-0 md:px-4">
            <Link
              className={`${
                pathname === link.link ? "text-third-color" : "text-gray-400"
              } hover:text-third-color`}
              href={link.link}
            >
              <span>{link.text}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
