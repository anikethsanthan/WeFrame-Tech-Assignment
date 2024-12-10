/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react'

const Description = () => {
  return (
    <div className=' absolute top-[927px] left-[36px] w-[711px] flex '>
        <div>
        <h1 className='text-[#111928] text-[20px] font-normal  h-[25px]'>Description produit</h1>
      <p className='text-[#9C9C9C] text-[14px] font-normal mt-[10px]' >
      Festi vous propose à la location un/une 
          &quot;Jewel – grand couteau/10pc&quot; 
          pour votre évenement et ce dès 0,35 € / pièce (HTVA).
          Que ce soit pour votre mariage, une fête
          d&apos;anniversaire ou du personnel, ce produit a fait l
          &apos;objet d&apos;une sélection rigoureuse par notre équipe.
          Il est en location chez nous sous la référence &quot;VAJGC&quot;.
          Nous sommes à votre disposition pour que les événements de nos clients,
          même en last-minute, soient toujours une réussite.
          Vous pourrez trouver toute une série d&apos;autres produits
          à louer de ce type dans la catégorie &quot;Art de la Table&quot;</p>
        </div>

        <div className='absolute left-[762px] w-[758px] h-[124px] bg-[#FBF9F899]'>
            <div className='h-[62px] font-medium text-[16px] pt-[20] pl-[52px] text-[#393939] cursor-pointer hover:border border-[#0093D0] flex'>
                <p>LIVRAISONS</p>
                <button className='flex  absolute left-[720px] font-bold text-[20px]'>+</button>
            </div>
            <div className='h-[62px] font-medium text-[16px] pt-[20] pl-[52px] text-[#393939] cursor-pointer hover:border border-[#0093D0] flex'>
                <p>QUESTIONS</p>
                <button className='flex  absolute left-[720px] font-bold text-[20px]'>+</button>
            </div>
            
        </div>
     
    </div>
  )
}

export default Description
