import { ChevronDown } from "lucide-react"
import { dummyRecentNft, dummyTrendingNft } from "../../data/dummyData"  
import { RootState } from "../../Redux/store"
import { useSelector } from "react-redux"

export const RightSection = ()=>{

  const { trendingNft, recentNft } = useSelector((state:RootState)=>state.dummyData)
  
  return <section className=" max-w-md w-full  px-3">
       <div className=" font-cpmono-heading text-white text-center">

{/* Trending NFTs */} 

       <div className=" flex flex-col mt-5 border-b-[1px] border-primary pb-4">
    <div className=" flex justify-between font-cpmono-heading px-3">
      <h2  className=" text-subtle2 text-[14px] ">TRENDING NFTs</h2>
      <ChevronDown className=" text-subtle2"/>
    </div>
      {/* <VisitedNftCard/> */}
    <div  className=" w-full mt-3 flex flex-col gap-3">
      {trendingNft.map((nft,index)=><TrendingNftCard key={index} name={nft.name} owner={nft.owner}  img={nft.img}  mcap={nft.mcap} listed={nft.listed}/>)}
    </div>
  </div>

{/* Recent Searches NFTs */} 

  <div className=" flex flex-col mt-5 border-b-[1px] border-primary pb-4">
    <div className=" flex justify-between font-cpmono-heading px-3">
      <h2  className=" text-subtle2 uppercase text-[14px] ">Recent Searches </h2>
      <ChevronDown className=" text-subtle2"/>
    </div>
    <div  className=" w-full mt-3 flex flex-col gap-3">
      {recentNft.map((nft,index)=><RecentSearchCard
       key={index} name={nft.name} owner={nft.owner}  img={nft.img}  mcap={nft.mcap} />)} 
    </div>
  </div>
    </div>
  </section>
}

type GlobalProps = { 
  name?: string;
  owner?: string;
  img?: string;
  mcap?: string;
  listed?: string; 
}
 

const TrendingNftCard = ({name,owner,img,mcap, listed}:GlobalProps) => {
  return (
    <div className=" w-full flex gap-2 justify-b items-center px-3 hover:bg-zinc-800 cursor-pointer rounded-md py-1 transition-all duration-300">
      <div>
        <img src={img} alt="" 
        width={35}
        className=" rounded-full" />
      </div>
      <div className=" w-full font-cpmono-heading flex flex-col">
        <div className=" flex justify-between">
          <div className=" text-subtle">
            <h2 className=" text-[14px] leading-6">{name}</h2>
          </div>
          <div className="">
            <p className=" text-[13px] text-mcap
            ">
            Mcap:{mcap}M
            </p>
          </div>
        </div>
        <div className=" flex justify-between">
          <div className=" text-subtle2">
            <h2 className=" text-[12px] ">
             {owner}
            </h2>
          </div>
          <div className="">
            <p className=" text-[13px] text-listed">
            Listed:{listed}%
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const RecentSearchCard = ({name,img,mcap}:GlobalProps) => {
  return (
    <div className=" w-full flex gap-2 items-center px-3 hover:bg-zinc-800 cursor-pointer rounded-md  py-1 transition-all duration-300">
    <div>
      <img src={img} alt="" 
      width={35}
      className=" rounded-full" />
    </div>
    <div className=" w-full font-cpmono-heading text-left">
      <div className=" flex flex-col justify">
        <div className=" text-subtle">
          <h2 className=" text-[14px] leading-6">{name}</h2>
        </div>

        <div className=" text-mintNft text-left">
          <h2 className=" text-[12px] ">
            Mcap: {mcap}M
          </h2>
        </div>
      </div>  

    </div>
  </div>
  )
}
