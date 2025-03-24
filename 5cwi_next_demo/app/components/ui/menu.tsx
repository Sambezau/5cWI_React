import React from 'react'
import Link from 'next/link'

type Props = {}

export default function Menu({}: Props) {
  return (
    <div className='flex justify-center bg-gray-500 rounded-2xl m-4'>
        <ul className='flex p-4'>
            <li className='p-4 hover:bg-blue-200 font-bold'>
                <Link href="/">Home</Link>
            </li>
            <li className='p-4 hover:bg-blue-200 font-bold'>
                <Link href="/cars">Cars</Link>
            </li>
            <li className='p-4 hover:bg-blue-200 font-bold'>
                <Link href="/trucks">Trucks</Link>
            </li>
        </ul>
    </div>
  ) 
}