/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex '>
      <div className='absolute top-[2822px] left-[20px]'>
         <img className="h-[300px] w-[703px]" src='./Frame 204.png' alt='img'></img>
      </div>

      <div className='absolute top-[2822px] left-[742px] h-[300px] w-[818px] bg-[#FFF3F9] rounded-[20px]'>
        <p className='ml-[34px] text-4xl pt-[36px]'> S&apos;inscrire & économiser <span className='text-[#5CD2DD]'>10%</span></p>
        <p className='font-medium text-[14px] text-[#BDA2B0] w-[753px] h-[71px] mt-[27px] ml-[34px]'>Office ipsum you must be muted.
             Synergize helicopter prioritize anyway job due
              harvest most opportunity didnt. 
              Yet busy any meeting shark light marginalised 4-blocker message.
               Productize corporate nail caught synergy highlights lunch.
                Company another pushback items dear or any.
        </p>

        <input input="text" className=' hover:shadow-lg w-[565px] h-[58px] ml-[34px] absolute top-[188px] pl-[56px] rounded-[8px]' placeholder='john@doe.com'></input>
        <button className='flex justify-center p-[15px] bg-[#5CD2DD]
         h-[58px] absolute top-[188px] left-[612px] rounded-[8px]
          w-[167px] ml-[8px] text-[#FFFFFF] hover:shadow-lg'>
            S&apos;inscrire <img className='w-[22px] h-[22px] ' src='./arrow-right.png' alt='arrow'></img></button>
         
      </div>

      
    </div>
  )
}

export default ContactForm
