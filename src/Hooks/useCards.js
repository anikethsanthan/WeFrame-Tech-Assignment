/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react'

const useCards = () => {
  return (
    <div>
        <div className='w-[330px] h-[438px] mr-[12px]  rounded-[8px] '>
                    {/* like section */}
                    <div className='absolute top-[127px] flex justify-between'>
                        <div>
                        <img  className="h-[32px] w-[32px] hover:shadow-lg ml-[12px]" src='./Vector.heartpng.png' alt='heart'></img>
                        </div>
                        <div className='bg-[#FFFFFF] w-[100px] h-[18px] rounded-[4px] ml-[166px]'>
                        <p className='font-medium text-[10px] text-[#111928] text-center pt-[2px]   '>Art de la table</p>
                        </div>   
                    </div>
                    {/* main image */}
                    <div className='bg-[#F9F7F5]'>
                    <img  className="w-[330px] h-[362px] object-contain " src='./Table ronde 165cm Festi 1.png' alt='itemimg'></img>
                    </div>
                    {/* heading and main price tag */}
                    <div className='flex justify-between w-[310px] pl-[10px]'>
                        <h1 className='text-[24px] font-normal'>Title</h1>
                        <p className='text-[24px] font-medium'>0<sup>€</sup></p>
                    </div>
                    {/* extra info */}
                    <div className='flex justify-between w-[310px] pl-[10px] mt-2'>
                        <h1 className='font-normal text-[14px] text-[#9C9C9C]'>o.35€/Piece .REF.VABGN5 </h1>
                        <p className='bg-[#F1F4F6] w-[68px] h-[26px] text-[11px] font-medium text-center pt-[5px] text-[#546A7D] rounded-lg'>20 Pieces</p>
                    </div>

                </div>
      
    </div>
  )
}

export default useCards
