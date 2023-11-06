'use client'

import React, { useState } from 'react'

const syrupsList = ['Ваниль', 'Миндаль', 'Фундук', 'Амеретто', 'Карамель', 'Кокос', 'Соленая карамель', 'Лесная ягода', 'Лаванда', 'Имбирный пряник', 'Банан', 'Шоколад', 'Мята', 'Клубника', 'Вишня', 'Арбуз', 'Клен', 'Фисташка', 'Малина', 'Тыква', 'Макадамия']

export const Syrups = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className='relative duration-300'>
      <span 
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className='select-none duration-300 hover:text-black hover:no-underline underline text-primary-color'>
        Сироп
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 inline-block ml-2 duration-300 ${hovered ? 'rotate-45' : 'rotate-0'}`}>
          <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
        </svg>

      </span>
      <div className={`${hovered ? 'block' : 'hidden'} absolute -translate-y-full xl:-translate-x-3/4 p-5 border w-96 bg-primary-color -top-5 rounded-md`}>
        {syrupsList.join(', ')}
      </div>
    </div>
  )
}
