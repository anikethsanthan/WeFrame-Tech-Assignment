/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react'

const ContactUs = () => {
  return (
   
    <div className='absolute top-[2364px] w-[1662px] h-[567px] bg-gradient-to-b from-[#EE4197]/10 via-[#EE4197]/5 to-[#FFFFFF]'>
       {/* upper text and heading */}
        <div className='absolute left-[336px] w-[928px] h-[255px] pt-[66px]'>
             <div className='flex justify-center'>
                 <h1 className='w-[360px] h-[43px] font-medium text-[35px] text-center '>On s’occupe de <span className='text-[#5CD2DD]'>tout</span></h1>
             </div>
             <p className='text-[14px] font-normal text-[#9C9C9C] mt-[10px] text-center'>Office ipsum you must be muted. It meeting commitment busy pain.</p>
        </div>

       {/* lower icons */}
        <div className='  absolute top-[182px] left-[336px] w-[928px] h-[139px] pt-[10px] pb-[10px] flex justify-between  '>

            <div className='w-auto h-auto flex flex-col items-center '>
              <img className='flex justify-center ' src='./Groupe_25.png' alt='bag'></img>
              <p className='mt-[19px] text-center text-[20px] '>Livraison & Reprise</p>
              <p className='text-[#9C9C9C] text-[14px] text-center '>Selon vos besoins</p>
            </div>

            {/* <div className='w-[100px] h-[2px] bg-gray-300 mx-4 '></div> */}

            <div className='w-auto h-auto flex flex-col items-center '>
            <img className='' src='./Groupe 504.png' alt='bag'></img>
            <p className='mt-[19px] text-center text-[20px] '>Nettoyage</p>
            <p className='text-[#9C9C9C] text-[14px] text-center '>Selon vos besoins</p>
            </div>

            <div className='w-auto h-auto flex flex-col items-center'>
            <img  className='' src='./Groupe_56.png' alt='bag'></img>
            <p className='mt-[19px] text-center text-[20px] '>Commande Illimitée</p>
            <p className='text-[#9C9C9C] text-[14px] text-center '>Tout est possible</p>
            </div>

            <div className='w-auto h-auto flex flex-col items-center'>
            <img className='' src='./Groupe_123.png' alt='bag'></img>
            <p className='mt-[19px] text-center text-[20px] '>Transport & Enlèvement</p>
            <p className='text-[#9C9C9C] text-[14px] text-center '>On s’occupe de tout.</p>
            </div>

          </div>
           
        
        </div>

  )
}

export default ContactUs
