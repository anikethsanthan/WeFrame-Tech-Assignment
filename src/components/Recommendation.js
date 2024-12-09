/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react'
import { cardData } from '@/utilities/utils.js';


const Recommendation = () => {
  return (
    <div className='w-[1600px] h-[511px] absolute top-[1770px]'>
      {/* title */}
      <div className='pr-[30px] pl-[30px] h-[43px]'>
      <h1 className='font-medium text-[35px]'>Ces produits pourraient vous intéresser</h1>
      </div>
      {/* cards */}
      <div className='h-[438px]  w-[1540px] ml-[30px] mt-[73px]'>
        <div className='flex'>
        
        {cardData.map((card) => (
       
       <div key={card.id} className='w-[330px] h-[438px] mr-[24px] rounded-[8px] group'>
       {/* like section */}
       <div className='bg-[#F9F7F5] absolute top-[109px] flex justify-between'>
         <div className='pt-[20px]'>
           <img className="h-[32px] w-[32px] hover:shadow-lg ml-[12px]" src='./Vector.heartpng.png' alt='heart' />
         </div>
         <div className='mt-[20px] bg-[#FFFFFF] w-[100px] h-[18px] rounded-[4px] ml-[166px]'>
           <p className='font-medium text-[10px] text-[#111928] text-center pt-[2px]'>{card.smallTitle}</p>
         </div>
       </div>

       {/* main image */}
       <div className='bg-[#F9F7F5] w-[330px] h-[362px]'>
         <img className="hover:scale-105 w-[224px] h-[300px] object-cover ml-[53px] mr-[53px] pt-[74px] flex justify-center" src={card.imageurl} alt='itemimg' />
       </div>

       {/* add button displays when hovered */}
       <div className='bg-white ml-[8px] mr-[8px] rounded-md pt-2 pb-2 hover:scale-105 flex justify-between -mt-[3.75rem] mb-[1.75rem] pl-[20px] pr-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
         <p className='pt-2'>QTÉ</p>
         <div className='flex items-center space-x-2 rounded-[0.250rem]'>
           <button className="px-4 py-2 font-medium rounded hover:bg-gray-300">-</button>
           <span className="px-4 py-2 font-medium rounded">1</span>
           <button className="px-4 py-2 font-medium rounded hover:bg-blue-600">+</button>
         </div>
         <button className='bg-[#f5429b] w-[81px] p-2 rounded-lg'>Ajouter</button>
       </div>

       {/* heading and main price tag */}
       <div className='flex justify-between w-[310px] pl-[10px] -mt-[10px]'>
         <h1 className='text-[24px] font-normal'>{card.title}</h1>
         <p className='text-[24px] font-medium'>{card.price}<sup>€</sup></p>
       </div>

       {/* extra info */}
       <div className='flex justify-between w-[310px] pl-[10px] mt-2'>
         <h1 className='font-normal text-[14px] text-[#9C9C9C]'>{card.fullPrice}€/Piece .REF.{card.ref} </h1>
         <p className='bg-[#F1F4F6] w-[68px] h-[26px] text-[11px] font-medium text-center pt-[5px] text-[#546A7D] rounded-lg'>{card.pieces} Pieces</p>
       </div>
     </div>

                ))}
      
    </div>
          
        </div>

      </div>


      
  )
}

export default Recommendation
