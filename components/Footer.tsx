import React from 'react'

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
        <ul className='flex gap-2 sm:gap-4 justify-center items-center'>
          <li>
            <a className='underline duration-300 hover:text-blue-300' href="tel:+375295473916">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>

            </a>
          </li>
          <li>
            <a className='underline duration-300 hover:text-blue-300' href="https://www.instagram.com/kavalaska_mog/" target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
              </svg>

            </a>
          </li>
          <li>
            <a className='underline duration-300 hover:text-blue-300' href="mailto:kavalaskamog@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>

            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
