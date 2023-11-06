import React from 'react'
import Link from 'next/link'
import { Navigation } from './Navigation'

const navItems = [
  {href: '/', title: 'Домашняя'},
  {href: '/about-us', title: 'О нас'},
  {href: '/menu', title: 'Меню'},
];

export const Header = () => {
  return (
    <header className='flex items-center justify-between p-5 pl-20 pr-20'>
      <Link href={'/'} className='flex items-center w-28'>
        <img src="/kavalaska_logo.png" alt="Кава ласка" />
      </Link>
      <Navigation navLinks={navItems}/>
    </header>
  )
}
