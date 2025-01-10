import { ArrowDown, ArrowUp } from 'lucide-react'
import  { useState } from 'react'


// example json for nftCardList
const details = {
  img:"https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F8dd340c5-ab25-4106-9d43-b4aec2ff9485",
  name:"Fragma",
  supply:"21",
  mints:"24",
  mintPercent:"0.37",
  mcap:"122",
  mcapUp:"2.37",
  mcapDown:"0.15",
  listeners:"20",
  listenersUp:"10",
  listenersDown:"8",
  priceUp:"6.45",
  priceDown:"2.73",
}

type NftCardListProps = typeof details

export const Section3 = ({allNftDetails,buyNftDetails}:{allNftDetails:NftCardListProps[], buyNftDetails:NftCardListProps[]}) => {
  
  const [allNftTab, setAllNftTab] = useState(true)
  return (
    <section className=' containers relative w-full h-full text-white font-cpmono-heading'>
         <div className="absolute inset-0 h-[1px] -mt-20 bg-gradient-radial from-[#bbbbbb] via-[#232324] to-[#232324]"></div>   
      <div className={`mt-20 border-[3px] ${allNftTab?"border-[#007336] bg-[#001A0C] ":"border-[#1e4b79] bg-[#0b1c2e]"}  transition-all duration-300 rounded-lg `}>
        <div className={` transition-all duration-300 rounded-t-md px-4 py-3 flex gap-5 text-[14px] bg-all-nft-dark-main ${allNftTab?"bg-all-nft-dark-main":" bg-buy-nft-dark"}`}>
          <button onClick={()=>setAllNftTab(true)} className=' bg-all-nft-dark text-all-nft-light border-2 rounded-[4px] py-1 p-2 border-all-nft-light'>All NFTs</button>
          <button onClick={()=>setAllNftTab(false)} className=' bg-buy-nft-dark text-buy-nft-light border-2 rounded-[4px] py-1 p-2 border-buy-nft-light'>Buy NFTs</button>
        </div>
        <div className=' px-4 py-3 '>
          <div className=' p-2 space-y-5'>
           { allNftTab && allNftDetails.map((allNft:NftCardListProps)=><NftCardList {...allNft} />)} 

           { !allNftTab && buyNftDetails.map(buyNft=><NftCardList {...buyNft} />)} 
          </div>
        </div>
      </div> 
    </section>
  )
}
 

const NftCardList = ({img, name, supply, mints, mintPercent, mcap, mcapUp, mcapDown, listeners, listenersUp, listenersDown,  priceUp, priceDown}:NftCardListProps)=>{
  return <div>
    <div  className='flex justify-between gap-3 flex-wrap w- text-[18px] bg-black p-2 rounded-[3px] '>

      <div className=' flex gap-3 items-center'>
        <div>
          <img width={70} src={img}
          className=' rounded-[3px]'
          alt="" />

        </div>
        <div className=' flex flex-col'>
          <p className=' '>{name}</p>
          <p className=' '>Supply: {supply}</p>
        </div>
      </div>
      <div className=' flex items-center'>
      <div className=' flex flex-col'>
          <p className=' '>Mints: {mints}</p>
          <p className=' '>{mintPercent}%</p>
        </div>
      </div>

      <div className=' flex items-center'>
      <div className=' flex flex-col'>
          <p className=' '>Market Cap: {mcap}k</p>
          <div className=' flex gap-3 text-[16px]'>
            <p className=' text-priceUp '>+ {mcapUp}%</p>
            <p className=' text-priceDown'>- {mcapDown}%</p>
          </div>
        </div>
      </div>
      <div className=' flex items-center'>
      <div className=' flex flex-col'>
      <p className=' '>Listners: {listeners}</p>
          <div className=' flex gap-3 text-[16px]'>
            <p className=' text-priceUp '>{listenersUp} <ArrowUp width={19} className=' inline'/></p>
            <p className=' text-priceDown'> <ArrowDown width={19} className=' inline mr-1'/> {listenersDown}</p>
          </div>
        </div>
      </div>
      <div className=' flex items-center'>
      <div className=' flex gap-3 text-[24px]'>
            <p className=' text-priceUp '>{priceUp} <ArrowUp width={25} className=' inline'/></p>
            <p className=' text-priceDown'> <ArrowDown width={25} className=' inline mr-1'/> {priceDown}</p>
          </div>
      </div>
    </div>
  </div>
}