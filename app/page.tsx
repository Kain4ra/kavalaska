import { Arrow1 } from '@/components/svg/Arrow1'
import { Arrow2 } from '@/components/svg/Arrow2'
import localFont from '@next/font/local'
import Link from 'next/link'

const elowen = localFont({
  src : [{
    path: '../public/fonts/Elowen.ttf',
    weight: '400'
  }]
})


export default function Home() {
  return (
    <main className='p-5'>
      <div className='relative flex flex-col items-center m-auto mb-24'>
        <h1 className={`text-center font-bold text-7xl tracking-widest text-[#BA2D0B] mb-5 ${elowen.className}`}>Кава Ласка</h1>
        <p className='text-center text-primary-color whitespace-pre-wrap mb-10'>Кофе с собой. Кофе с тобой. {'\n'} Кофе со мной.❤️</p>
        <Link href={'/menu'}
        className='w-[160px] py-2 bg-[#4E5B3E] text-white text-center rounded-2xl duration-300 hover:bg-[#688249] hover:scale-105'
        >
          Хочу кофе!
        </Link>
        <div className='absolute hidden md:block 2xl:left-64 xl:left-64 lg:left-32 md:left-16 left-0'>
          <Arrow1 />
        </div>
        <div className='absolute hidden md:block 2xl:right-64 xl:right-48 lg:right-16 right-0 -bottom-28 lg:bottom-0'>
          <Arrow2 />
        </div>
      </div>
      <div className='relative mb-10'>
        <div className='relative z-10 flex items-end justify-around md:justify-center'>
          <img className='w-[150px] duration-300 hover:scale-95' src="/cup1.png" alt="cup" />
          <img className='hidden md:inline w-[250px] duration-300 hover:scale-95' src="/cup2.png" alt="cup" />
          <img className='w-[150px] duration-300 hover:scale-95' src="/cup3.png" alt="cup" />
        </div>
        <img className='absolute bottom-0 z-0 right-1/2 translate-x-1/2' src="/beans.png" alt="beans" />
      </div>
    </main>
  )
}
