import { productsItem } from '@/types/types'
import React from 'react'

type Props = {
  productsList: productsItem[]
}

export const Menu = ({productsList}: Props) => {
  return (
    <table className='m-auto mb-10'>
      <thead>
        <tr className='text-2xl underline'>
          <th className='w-1/2 p-10'>Напиток</th>
          <th className='p-10'>Стандартный</th>
          <th className='p-10'>Двойной</th>
        </tr>
      </thead>
      <tbody className='text-xl'>
        {
          productsList.map((item) => {
            return (
              <tr className='border-b-2' key={item.name}>
                <td className='flex items-center p-5'>
                  <img className='mr-4' src="/flat.png" alt="cup" />
                  {item.name}:
                </td>
                <td className='text-center'>{`${item.priceStandard}${item.priceStandard === '-' ? '' : 'р.'}`}</td>
                <td className='text-center'>{`${item.priceDouble}${item.priceDouble === '-' ? '' : 'р.'}`}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
