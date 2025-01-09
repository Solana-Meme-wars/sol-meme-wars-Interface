 
import { dummyNft } from "../../data/dummyData"
import { NewNftCard } from "../../components/common/NewNftCard"
import { RootState } from "../../Redux/store"
import { useSelector } from "react-redux"

 

export const MidSection = ()=>{

  const { nfts } = useSelector((state:RootState)=>state.dummyData)


  return <section className="mx-auto  max-w-3xl px-4 mt-40">
    <div className="  mt-20">
<div className=' space-y-24'>

 {/* {[...Array(100).map((index)=>{
  return <div className="text-white text-[50px]" key={index}>
   <p> hello jarvis {index+1}</p>
  </div>
 })]} */}

  {nfts.map((nft,idx:number)=>
  <div className=" border-b pb-10 border-[#303131]"> 
    <NewNftCard key={idx} name={nft.name} owner={nft.owner} spread={nft.spread} img={nft.img} buy={nft.buy} sell={nft.sell} listed={nft.listed} listedpercent={nft.listedpercent} Mcap={nft.Mcap} vol24h={nft.vol24h} />
  </div>
  )}  
</div>
</div>
  </section>
}