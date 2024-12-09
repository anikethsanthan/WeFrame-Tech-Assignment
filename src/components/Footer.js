/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react'

const Footer = () => {
  return (
    <div className='w-[1600px] h-[300px] absolute top-[3214px] border-t-[0.5px] border-[#39393930] mb-[700px]'>
      <div className='w-[799px] h-[130px] flex absolute top-[41px] '>
      <div><img className="w-[133.01px] h-[65px] mt-[33px] ml-[30px] mr-[40px]" src="./Group.png" alt="logo"></img></div>


<div className='flex justify-between w-[626px] h-[130px]'>
        <div> 
            <h1 className='font-bold text-[#393939] '>INFOS PRATIQUES</h1>
            <p className='font-normal text-[#393939]'>À propos</p>
            <p className='font-normal text-[#393939]'>Livraisons & Reprises</p>
            <p className='font-normal text-[#393939]'>Mode d’emploi</p>
            <p className='font-normal text-[#393939]'>F.A.Q</p>
        </div>

        <div>
             <h1 className='font-bold text-[#393939] '>LEGAL</h1>
             <p className='font-normal text-[#393939]'>Mentions légales</p>
            <p className='font-normal text-[#393939]'>CGU</p>
            <p className='font-normal text-[#393939]'>CGV</p>
            <p className='font-normal text-[#393939]'>Politique de confidentialité</p>
        </div>

        <div> 
            <h1 className='font-bold text-[#393939] '>MON COMPTE</h1>
            <p className='font-normal text-[#393939]'>Accéder à mon compte</p>
            <p className='font-normal text-[#393939]'>Ma liste d’envie</p>
            <p className='font-normal text-[#393939]'>Créer un compte</p>
            <p className='font-normal text-[#393939]'>Mot de passe oublié</p>
        </div>
</div>        


   
      </div>

      {/* logo */}
      <div className='absolute left-[1401px] top-[41px]'>
         <h1 className='font-bold text-[#393939] mr-[40px] pl-[34px] mb-[12px]'>NOUS SUIVRE</h1>
        <div className='w-[146px] h-[42.65px] flex justify-between'>
          <div className=" hover:scale-105 w-[42px] h-[42.65px] border-[0.5px] border-[#39393959] rounded-[6px]">
          <img  src='./Frame 117.png' alt='logo'></img></div>
          <div className="hover:scale-105 w-[42px] h-[42.65px] border-[0.5px] border-[#39393959] rounded-[6px]" >
          <img  className=" flex justify-center p-[10px]"src='./linkedin-in.png' alt='logo'></img></div>
          <div className=" hover:scale-105 w-[42px] h-[42.65px] border-[0.5px] border-[#39393959] rounded-[6px]" >
         <img className=" flex justify-center p-[10px]" src='./instagram.png' alt='logo'></img> </div>
        </div>
      </div>
    </div>
  )  
}

export default Footer
