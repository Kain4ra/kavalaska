import React from 'react'
import { Instagram } from './svg/Instagram'
import { Phone } from './svg/Phone'
import { Mail } from './svg/Mail'

export const Footer = () => {
  return (
    <footer className='p-10 bg-black text-white grid grid-cols-3'>
      <div className='text-center'>
        <h2 className='text-2xl mb-3'>Кава Ласка</h2>
        <span className='text-xl'>2023 © OOO "Доппио"</span>
      </div>
      <div className='text-center'>
        <h2 className='text-2xl mb-3'>Адреса:</h2>
        <ul>
          <li>
            <a className='underline duration-300 hover:text-blue-300' href="https://yandex.by/maps/org/kava_laska/221744089680/?ll=30.317350%2C53.880130&z=16.74" target='_blank'>
              Могилев, ул. Гагарина 79
            </a>
          </li>
          <li>
            <a className='underline duration-300 hover:text-blue-300' href="https://yandex.by/maps/org/kava_laska/182760430905/?indoorLevel=1&ll=30.363317%2C53.872205&z=16.74" target='_blank'>
              Могилев, ул. Мовчанского 6
            </a>
          </li>
        </ul>
      </div>
      <div className='text-center'>
        <h2 className='text-2xl mb-3'>Контакты:</h2>
        <ul className='flex gap-4 justify-center items-center'>
          <li>
            <a className='underline duration-300 hover:text-blue-300' href="tel:+375295473916">
              <Phone />
            </a>
          </li>
          <li>
            <a className='underline duration-300 hover:text-blue-300' href="https://www.instagram.com/kavalaska_mog/" target='_blank'>
              <Instagram />
            </a>
          </li>
          <li>
            <a className='underline duration-300 hover:text-blue-300' href="mailto:kavalaskamog@gmail.com">
              <Mail />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
