/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from 'react'

const Main = () => {
  return (
    <div>
        {/* small text section of top */}
      <div className='w-[159px] h-[45px] absolute top-[177px] p-[12px] flex ml-[34px]'>
        <h3 className='text-[14px] text-[#393939] w-[39px]'>Home </h3>

        <div className="w-[5px] h-[5px] ml-[16px] mt-[8px] bg-[#9C9C9C] rounded-full flex-shrink-0"></div>

        <ul className='text-[14px] text-[#9C9C9C] ml-[16px] w-[95] flex-nowrap'>
            <li className='w-[95px]'>Art de la table</li>
        </ul>
      </div>

      <div>
        {/* main image section */}
        <div className='w-[761px] h-[652px] bg-[#F8F6F4] absolute left-[30px] top-[231px]'>
            {/* small preview images */}
            <div>
                <img  className="w-[40px] h-[40px] absolute left-[19px] top-[20px]" src="./Table ronde 165cm Festi 2.png" alt='preview'></img>
                <img  className="w-[40px] h-[40px] absolute left-[19px] top-[70px] opacity-50" src="./Table ronde 165cm Festi 2.png" alt='preview'></img>
                <img  className="w-[40px] h-[40px] absolute left-[19px] top-[120px] opacity-45" src="./Table ronde 165cm Festi 2.png" alt='preview'></img>
                <img  className="w-[40px] h-[40px] absolute left-[19px] top-[170px] opacity-45" src="./Table ronde 165cm Festi 2.png" alt='preview'></img>
            </div>

            {/* main large image */}
            <img className="w-[552px] h-[552px] bg-[#F8F6F4] absolute left-[141px] top-[42px]" src='./yof.png' alt='main logo'></img>
        </div>
        {/* main text section */}
        <div className='w-[761px] h-[652px]  absolute left-[816px] top-[231px]'>
            <div className='flex justify-between'>
            <h1 id='text'>Cheese – appareil à raclette 1/2 roue</h1>
            <img className='w-[27.64px] h-[25.34px] mt-[6px] ' src='./HEART1.png' alt='heart'></img>

            </div>
            
            <div className='flex border-b-[0.5px] border-[#9C9C9C]'>
            <p id='price'>39,50€</p>
            <p id='smallPriceTag' className='text-[#9C9C9C] mt-2 ml-1'>/pièce</p>
        </div>

            <div className=' absolute  top-[88px] border-b-[0.5px] border-[#9C9C9C] w-[761px] flex justify-between'>

                <div className='flex'>
                <div className='flex mb-3'>
                    <img  className="w-[24px] h-[24px] mr-[10px]" src='./Capa_1.png' alt='scale'></img>
                    <p className='mr-[10px]'> 20<sup>cm</sup></p>
                </div>
                <div className='flex'>
                    <img   className="w-[24px] h-[24px] mr-[10px]" src='./Frame.png' alt='circle'></img>
                    <p>50<sup>cm</sup></p>
                </div>
                </div>

                <div>
                    <p className='text-[#9C9C9C] text-[12px] font-normal'>RÉF : VABGN5</p>
                </div>
            </div>

            <div className='absolute top-[170px] h-[412px] border-b-[0.5px] border-[#9C9C9C] w-[761px]  ' >
                <p className='text-[#5D5D5D] text-[14px] font-normal'>
                   Location appareil à raclette - Raclette traditionnelle 1/2 roue<br></br>
                   Réglable en hauteur<br></br>
                   Appareil à raclette professionnel<br></br>
                   Boîtier de chauffe horizontal réglable en hauteur<br></br>
                   <br></br>
                   220V<br></br>
                   900W</p>
            </div>

            {/* buttons main section */}
            <div className= ' absolute top-[586px] w-[153px] h-[49px] flex justify-center border-[0.5px] border-[#9C9C9C] mt-3'>
            {/* cart Count */}
                <div className='flex items-center space-x-2 rounded-[0.250rem]'>
                <button className="  px-4 py-2   font-medium rounded hover:bg-gray-300">-</button>
                 <span className="px-4 py-2  font-medium rounded">1</span>
                 <button className="px-4 py-2  font-medium  rounded hover:bg-blue-600">+</button>
                </div>
            {/* add to cart     */}
                <div className=''>
                    <button className='absolute left-[162px] w-[592px] h-[50px] rounded-[0.250rem] bg-[#5CD2DD] text-[#FFFFFF] font-bold'>Ajouter au panier</button>
                </div>
                
            </div>

        
            

        </div>
      </div>
    </div>
  )
}

export default Main
