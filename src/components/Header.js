/* eslint-disable @next/next/no-img-element */
"use client";
export default function Header(){
   return (
    <div className="border-b-2 border-[#E5E7EB] w-[1600px] h-168px">
    <div className=" flex h-[168px] ">
        {/* Logo Section */}
        <div><img className="w-[133.01px] h-[65px] mt-[33px] ml-[29px]" src="./Group.png" alt="logo"></img></div>

        {/* searchbar Section */}
        <div className="  flex w-[768px] h-[50px] mt-[29px] ml-[40px]">

            <div className="flex bg-[#F9FAFB]">
            <input
         className="ml-[25px] mt-[14.5px]  mb-[14.5px]  w-[694px] h-[21px] leading-[21px] text-[14px] font-[400] bg-[#F9FAFB]" 
         type="text" placeholder="Rechercher un produit"/>

          <img className="w-[49px] h-[50px]bg-[#F9FAFB]" src="./Group 94.png" alt="srch"></img>
               
                </div>
                </div>

        {/* icons Section */}
        <div className="flex absolute left-[1059px]"> 

         <div className="flex justify-evenly  w-[109px] h-[21px] mt-[45px]  leading-[21px]">
             <img className="h-[18px] w-[18px]"  src="./lightbulb-01.png" alt="bulb"></img>
             <p className="font-medium text-[#3B4347] w-[83px] text-[14px]"> Inspirations</p>
             </div>
   
         <div className="flex justify-evenly w-[164px] h-[48px] mt-[31px]  p-[13.5px] gap-[8px]">
            <img className="w-[20px] h-[20px]" src="./heart.png" alt="heart"></img>
         <p className="w-[80px] h-[21px]  leading-[21px] text-[#3B4347] text-[14px] font-medium   ">Mes favoris</p>
         <div className="w-[28px] h-[18px] bg-[#CAD2D566] font-[10px] leading-[15px]  rounded-[30px]">
            <p className="  text-center pt-[0.15rem]  text-[10px] leading-[15px] ">24</p></div>
         </div>
         

         <div>
         <button className="absolute left-[297px]
          flex mt-[31px] text-[#FFFFFF] text-[14px] font-custom-weight
         border-[1px] gap-[8px]
         rounded-[6px]
         h-[48px] w-[105px]
          bg-[#0093D0]
          pt-[11.67px] pb-[10px] pr-[16px] pl-[16px]"> 

          <img  className="w-[20px] h-[20px]" src="./Icon.png" alt="cart"></img>Panier</button>

         </div>
      

          {/* avatar/User Icon */}
         <div className="flex justify-end w-[176px] h-[44px]  pl-[50px] "> </div>
          <img className="w-[44px] h-[44px] absolute left-[423px] top-[33px]" src="./Avatar.png" alt="avatar"></img>
         
          <p className="absolute left-[480px] top-[45px] text-[14px] font-medium">FR</p>
            <img className=" absolute left-[507px] top-[50px] w-[10px] h-[5.83px]" src="./dropd.png" alt="vector"></img>
        </div>


    </div>

    <div className=" h-[21px] w-[1537px] absolute top-[130.42px] ml-[23px]  flex-nowrap">

       <span className="h-[21px] font-medium text-[14px] leading-[21px] pr-[23px] text-[#6B7280] hover:text-[#0093D0] hover:font-bold hover:pb-[17px] hover:border-b-2 border-[#0093D0]">ART DE LA TABLE</span>
       <span className="h-[21px] font-medium text-[14px] leading-[21px] pl-[23px] pr-[23px] text-[#6B7280] hover:text-[#0093D0] hover:font-bold hover:pb-[17px] hover:border-b-2 border-[#0093D0]"> MOBILIER</span>
       <span className="h-[21px] font-medium text-[14px] leading-[21px] pl-[23px] pr-[23px] text-[#6B7280] hover:text-[#0093D0] hover:font-bold hover:pb-[17px] hover:border-b-2 border-[#0093D0]"> NAPPAGE</span>
       <span className="h-[21px] font-medium text-[14px] leading-[21px] pl-[23px] pr-[23px] text-[#6B7280] hover:text-[#0093D0] hover:font-bold hover:pb-[17px] hover:border-b-2 border-[#0093D0]"> MATERIEL DE SALLE</span>
       <span className="h-[21px] font-medium text-[14px] leading-[21px] pl-[23px] pr-[23px] text-[#6B7280] hover:text-[#0093D0] hover:font-bold hover:pb-[17px] hover:border-b-2 border-[#0093D0]"> CUISINE</span>
       <span className="h-[21px] font-medium text-[14px] leading-[21px] pl-[23px] pr-[23px] text-[#6B7280] hover:text-[#0093D0] hover:font-bold hover:pb-[17px] hover:border-b-2 border-[#0093D0]"> BARBECUE</span>
       <span className="h-[21px] font-medium text-[14px] leading-[21px] pl-[23px] pr-[23px] text-[#6B7280] hover:text-[#0093D0] hover:font-bold hover:pb-[17px] hover:border-b-2 border-[#0093D0]"> TENTE</span>
       <span className="h-[21px] font-medium text-[14px] leading-[21px] pl-[23px] pr-[23px] text-[#6B7280] hover:text-[#0093D0] hover:font-bold hover:pb-[17px] hover:border-b-2 border-[#0093D0]"> CHAUFFAGE</span>
       <span className="h-[21px] font-medium text-[14px] leading-[21px] pl-[23px] pr-[23px] text-[#6B7280] hover:text-[#0093D0] hover:font-bold hover:pb-[17px] hover:border-b-2 border-[#0093D0]"> PODIUM - PISTE DE DANSE</span>
       <span className="h-[21px] font-medium text-[14px] leading-[21px] pl-[23px] pr-[23px] text-[#6B7280] hover:text-[#0093D0] hover:font-bold hover:pb-[17px] hover:border-b-2 border-[#0093D0]"> SON ET LUMIERE</span>
       <span className="h-[21px] font-medium text-[14px] leading-[21px] pl-[23px] pr-[23px] text-[#6B7280] hover:text-[#0093D0] hover:font-bold hover:pb-[17px] hover:border-b-2 border-[#0093D0]"> PACKS</span>
       {/* <span className="h-[21px] font-medium text-[14px] leading-[21px] pl-[23px] pr-[23px] text-[#6B7280] hover:text-[#0093D0] hover:font-bold hover:pb-[17px] hover:border-b-2 border-[#0093D0]"> CONSOMMABLES</span> */}
    </div>
    </div>
   );
}

