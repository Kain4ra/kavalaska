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
      className='underline cursor-pointer hover:text-primary-color'>
        Сироп
      </span>
      <div className={`${hovered ? 'block' : 'hidden'} absolute -translate-y-full xl:-translate-x-full p-5 border w-96 bg-primary-color top-0 rounded-md`}>
        {syrupsList.join(', ')}
      </div>
    </div>
  )
}
