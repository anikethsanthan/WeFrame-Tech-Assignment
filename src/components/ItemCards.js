/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react'
import Cards from '@/components/Cards';

const ItemCards = () => {

  return (
    <div className=' absolute top-[1150px] bg-[#FBF9F899] w-[1600px] h-[570px]'>
        {/* heading */}
        <div className='flex justify-between w-[1540px] h-[47px] m-[30px]'>
            <h1 className='font-medium text-[35px] '>Articles similaires</h1>
            <p className='font-medium text-[16px] text-[#393939] hover:scale-105 cursor-pointer '><u>Voir toute la collection</u></p>
            </div>
        {/* scroll arrows */}
        <div className='flex justify-between relative top-[173px]'>
        <button  className='w-[46px] h-[46px] bg-[#5CD2DD] text-white z-50 hover:scale-105'>
          <img  className="w-[14px] h-[14px] ml-[16px]" src="./LeftArrow.png" alt="left arrow"></img>
          </button>
        <button   className='w-[46px] h-[46px] bg-[#5CD2DD] text-white z-50 hover:scale-105'>
        <img  className="w-[14px] h-[14px] ml-[16px]" src="./Rightarrow.png" alt="left arrow"></img>
        </button>
        </div>

        {/* main cards */}
            <div className='w-[1540px] h-[430px]  ml-[60px]'>
                <Cards cardWidth="330px" />
            </div>
      
    </div>
  )
}

export default ItemCards
