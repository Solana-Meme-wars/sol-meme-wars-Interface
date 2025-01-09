import { ArrowUp, Triangle } from "lucide-react" 
import { Link } from "react-router-dom"

const nftDetails = {
  buy: "5.60",
  sell: "2.20",
  listners:"2,345",
  mcap:"34",
  supply:"67",
  mints:"50"
}

type trendingNftProps = typeof nftDetails;

export const Section1 = ({nftName,banner, nftImage, creator, currentOwner, nftDetails}:{nftName:string, banner:string, nftImage:string,  creator:string, currentOwner:string, nftDetails:trendingNftProps}) => {
  return (
    <section className=' w-full mt-[56px] text-white font-cpmono-heading'>
      <div className=" w-full flex justify-center items-center">
        <img src={banner} alt="" className=" w-full" />
      </div>

      <div className=" containers w-full">
        <div className=" flex justify-between items-start w-full -mt-[80px]">
          <div className=" flex gap-3     ">
            <div className=" mt-2 bg-black rounded-2xl ">
              <div  className=" p-[6px]">
              <img width={144} className=" max-w-full rounded-xl " src={nftImage} alt="sdf" />
              </div>
      <div className=" flex justify-center items-center mt-2 ">
                <p className=" border-2 border-primary p-[8px] rounded-md font-oxanium font-semibold text-[16px] ">
                  <Triangle size={16} strokeWidth={5} className=" neon-upvote inline font-extrabold" /> 1.2k  <span className=" px-1">|</span>   <Triangle  strokeWidth={5} size={16} className=" inline neon-downVote rotate-180" /> 345
                </p> 
              </div>
            </div>
            <div className=" mt-10 ">
              <h2 className=" capitalize text-[24px] leading-6 tracking-tighter ">{nftName}</h2>
              <p className=" mt-6 font-oxanium font-semibold text-orange text-[18px]">
                Current Owner : <span className=" text-subtle3 inline">{currentOwner}</span>
                <Link to={`/profile/${currentOwner.split(' ')[0].toLowerCase()}-${currentOwner.split(' ')[1].toLowerCase()}`}>
                <img
                src="/images/redirect.png" className=" inline p-1 -mt-1 ml-1" />
                </Link>
              <p className=" font-oxanium font-semibold text-orange text-[18px]">
                Creator : <span className=" text-subtle3 inline">{creator}  </span>
                
              </p>
              </p>
            </div>
          </div>
          <div className=" px-6 py-5 pb-0 flex gap-3 flex-col rounded-2xl shadow- xl shadow- shadow-current-nft bg-black ">
             <div className=" flex justify-end items-start gap-16">
              <div className=" ">
                <h3 className=" w-[11  9px] leading-5 neon-green-nft font-oxanium font-semibold text-[20px] ">3.45 <ArrowUp strokeWidth={3.6} className=" inline"/>
                   <br />BUY
                </h3>
              </div>
              <div className=" text-right ">
              <h3 className=" w-[119px] leading-5 neon-pink-nft font-oxanium font-semibold text-[20px] "> <ArrowUp strokeWidth={3.6} className=" inline  rotate-180"/>3.45
                   <br />SELL
                </h3>
              </div>
             </div>
             <div className=" text-subtle3 w-full flex justify-between">
              <div className=" ">
                <p className="  font-oxanium font-semibold">
                  Listners : <span className=" text-white">{nftDetails.listners}</span>
                </p>
                <p className="      font-oxanium font-semibold">
                  Mcap : <span className=" text-white">{nftDetails.mcap}M</span>
                </p>
              </div>
              <div className=" flex gap-2 items-center">
              <div className=" w-full">
                <p className="     font-oxanium font-semibold">
                  Supply : <span className=" text-white">{nftDetails.supply}</span>
                </p>
                <p className=" text-right   font-oxanium font-semibold">
                  Mints : <span className=" text-white">{nftDetails.mints}</span>
                </p>
              </div>
              </div>
             </div>
             <div>

             </div>
          </div>  
        </div>
      </div>
    </section>
  )
}
