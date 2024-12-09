/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react'
import useCards from '@/Hooks/useCards';

const ItemCards = () => {
  return (
    <div className=' absolute top-[1150px] bg-[#FBF9F899] w-[1600px] h-[570px]'>
        {/* heading */}
        <div className='flex justify-between w-[1540px] h-[47px] m-[30px]'>
            <h1 className='font-medium text-[35px]'>Articles similaires</h1>
            <p className='font-medium text-[16px] text-[#393939] hover:scale-105 cursor-pointer '><u>Voir toute la collection</u></p>
            </div>

            <div className='w-[1540px] h-[430px]  ml-[60px]'>
                {useCards()} 
            </div>
      
    </div>
  )
}

export default ItemCards
