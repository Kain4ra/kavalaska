'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type navLink = {
  href: string,
  title: string
}

type navProps = {
  navLinks: navLink[]
}

export const Navigation = ({navLinks}: navProps) => {
  const pathname = usePathname();

  return (
    <nav className='flex w-full sm:w-2/3 justify-around'>
      {
        navLinks.map((link) => {
          const isActive = pathname === link.href;
          
          return (
            <Link 
            key={link.href} 
            href={link.href}
            className={
              `text-xl hover:underline underline-offset-2 ${isActive ? 'text-black pointer-events-none underline' : 'text-primary-color'}`
            }
            >
              {link.title}
            </Link>
          )
        })
      }
    </nav>
  )
}
