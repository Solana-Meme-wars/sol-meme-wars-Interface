import { Link } from "react-router-dom"
import { TiltArrow2 } from "../../assets/icons/TiltArrow2"
 
type trendingNftProps = {
  nftName:string,
  img:string,
  listners:string,
  mcap:string,
  supply:string,
  mints:string
}

export const Section1 = ({userName,banner, profilePic, joined, trendingNftDetails}:{userName:string, banner:string, profilePic:string, joined:string, trendingNftDetails:trendingNftProps}) => {
  return (
    <section className=' w-full mt-[56px] text-white font-cpmono-heading'>
      <div className=" w-full">
        <img src={banner} alt=""  className=" w-full"/>
      </div>
   
      <div className=" containers w-full">
        <div className=" flex justify-between w-full -mt-[80px]">
          <div className=" p-2 flex gap-3 items-end  ">
            <div className=" bg-black rounded-2xl ">
              <img width={144} className=" max-w-full rounded-2xl p-[5px]" src={profilePic} alt="" />
            </div>
            <div>
              <h2 className=" capitalize text-[24px] leading-6 tracking-tighter ">{userName}</h2>
              <p className=" font-oxanium font-semibold text-orange text-[18px]">
                Joined : <span className=" text-subtle3 inline">{joined}</span>
              </p>
            </div>
          </div>
          <div className=" p-6 py-7 pb-0 flex gap-3 flex-col rounded-2xl shadow- xl shadow- shadow-active-nft bg-black ">
             <div className=" flex justify-end items-start gap-16">
              <div className=" ">
                <h3 className=" w-[119px] text-most-active-nft">Most Active NFT:
                  <TiltArrow2 className=" inline"/>
                </h3>
              </div>
                <Link
                to={`/nft/${trendingNftDetails.nftName.split(' ')[0].toLowerCase()}-${trendingNftDetails.nftName.split(' ')[1].toLowerCase()}`} className=" w-full"
                >
              <div className=" flex gap-2 justify-end items-center">
               <div>
                <img width={34} className=" rounded-[3px]" src={trendingNftDetails.img}alt="" />
               </div>
               <div className=" leading-4">
                <p className=" text-[15px] tracking-wide">{trendingNftDetails.nftName.split(' ')[0]} <br /> {trendingNftDetails.nftName.split(' ')[1]}</p>
               </div>
              </div>
                </Link>
             </div>
             <div className=" text-subtle3 w-full flex justify-between">
              <div className=" ">
                <p className="  font-oxanium font-semibold">
                  Listners : <span className=" text-white">{trendingNftDetails.listners}</span>
                </p>
                <p className="      font-oxanium font-semibold">
                  Mcap : <span className=" text-white">{trendingNftDetails.mcap}M</span>
                </p>
              </div>
              <div className=" flex gap-2 items-center">
              <div className=" w-full">
                <p className="     font-oxanium font-semibold">
                  Supply : <span className=" text-white">{trendingNftDetails.supply}</span>
                </p>
                <p className=" text-right   font-oxanium font-semibold">
                  Mints : <span className=" text-white">{trendingNftDetails.mints}</span>
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
