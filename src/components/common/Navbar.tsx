import { ChevronDown, Search } from "lucide-react"
import { Logo } from "../../assets/icons/Logo"

export const Navbar = ()=>{
  return <div className=" border-b border-gray-600 text-gray-300 fixed w-full top-0 z-50  bg-[#111314]"> 
  <div className="  flex gap-7 items-center text-[12.7px] font-cpmono-normal font-semib old px-5 w-full">
    <div className=" flex items-center gap-3 font-cpmono-heading">
      <a href="/" className=" flex justify-center items-center">
     <Logo/>
     <p className=" w- 28 uppercase neon-text">Solmemewars</p>
      </a>
     <div className=" flex ml-3 gap-3 items-center justify-center"> 
     <p className="nav-text w-20  cursor-pointer uppercase font-bold text-[17px] text-nav">Trade<ChevronDown size={16} className=" inline ml-2 "/></p> 
     <p className="nav-text w-36 ml-3  cursor-pointer uppercase font-bold text-[17px] text-nav">Price lock<ChevronDown size={16} className=" inline ml-2 "/></p> 
     <p className="nav-text w-44 ml-3  cursor-pointer uppercase font-bold text-[17px] text-nav">Trending lock<ChevronDown size={16} className=" inline ml-2 "/></p> 
     {/* <p className=" w-64 text-gray-300 uppercase neon-pink-star"> <Star size={17} className=" fill-[#FF8AAD]  neon-pink-star inline"/> rewards<ChevronDown size={16} className=" inline ml-2 "/></p>   */}
     </div>
    </div> 
    <div className=" flex gap-2 px-2 border w-full border-gray-800 rounded-md items-center">
      <Search width={17} />
      <div className="">
      <input type="text" placeholder="Search by Collection" className=" py-2 bg-transparent w-full text-[13px] outline-none" /> 
      </div>
    </div>
  
   <div className=" w-[500px] flex justify-end items-center">
    <button className=" text-black font-bold font-cpmono-heading px-3 py-[6px] rounded-md bg-[#8EFBC1]  uppercase ">connect wallet </button>
    <ChevronDown size={16} className=" inline ml-2 "/>
   </div>
  </div>
  </div>
}