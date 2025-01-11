import { MessageSquare, Triangle } from "lucide-react"
import {ShareSvg} from '../../../public/svgs/ShareSvg'
import { OwnerNameSvg } from "../../assets/icons/OwnerNameSvg";
import { Link } from "react-router-dom";

interface NftProps {
  name: string,
  img: string,
  owner: string,
  spread?: number,
  buy?: number,
  sell?: number,
  listed?: number,
  listedpercent?: number,
  Mcap?: string,
  vol24h?: string
}

export const NewNftCard = ({ name,owner, spread=42, img, buy=54, sell=23, listed=45, listedpercent=12, Mcap='34', vol24h='11' }: NftProps) => { 
  console.log(vol24h, buy, sell, spread,listed);
  console.log("name...",name.split(' ').length);
  
  
  return <div>
    <div className=" nft-card w-full bg-[#101111] bordder border-[#101111] rounded-xl pr-[1.5px] ">
      <Link
      to={ name.split(' ').length>1 ?`/nft/${name?.split(' ')[0]?.toLowerCase()}-${name?.split(' ')[1]?.toLowerCase()}`:`/nft/${name.toLowerCase()}`}
      >
      <div className=" -mt-16 flex">
        <div className=" nft-card-img rounded-xl  p-[1.7px]"> 
          <div className=" w-32 h-32 mx-aduto rounded-t-xl p-3 bg-[#101111] border-4 border-[#101111]   ">
            <img src={`https://prod-image-cdn.tensor.trade/images/90x90/freeze=true/${img}`} alt="Frogana avatar" className="w-full h-full object-cover rounded-lg duration-300 rounded-   cursor-pointer " />
          </div>
        </div>
        <div className=" w-full ">
          <div className=" nft-card-img-left h-1/3 mt-[21.5px] -ml-[1.6px] w-11/12 pl-[1.4px] pb-[1.4px] rounded-bl-xl  bg-white ">
            <div className=" relative -z[999] w-full bg-black h-full rounded-bl-xl ">  </div>
          </div>
          <div className=" flex mt-2 justify-between items-center">
            <div>
              <h3 className=" font-cpmono-heading text-[#ffa600] capitalize cursor-pointer"> {name}</h3>
              <div className=" flex items-center gap-1">
              <OwnerNameSvg className=""/>
              {/* <Link to={"/profile/alex-jane"}> */}
              <p className=" font-cpmono-heading text-xs text-gray-500 cursor-pointer capitalize truncate w-32 ">{owner}</p>
              {/* </Link> */}
              </div>
            </div>
            <div className="font-cpmono-heading capitalize flex gap-3 pr-4 font-thin">
              <h3 className=" neon-minted text-[#5d9eff] bg-black p-1 rounded-md px-2 text-sm"> Minting:2K </h3>
              <h3 className=" neon-listed text-[#ff69b4] bg-black p-1 rounded-md px-2 text-sm"> Listed:{listedpercent}% </h3>
              <h3 className=" neon-mcap text-[#a855f7] bg-black p-1 rounded-md px-2 text-sm "> Mcap:{Mcap} </h3>

            </div>
          </div>
        </div>
      </div>
      </Link>

      {/* card contet */}
      {/* here removing this -mt gives a little better design */}
      <div className=" bg-[#101111] -mt-[82px] rounded-xl ">
        <div className=" mt-4">
          <div className=" pt-10 pb-5">
            {/* content */}
            <div className=" mt-5 px-4">
              <div>
              <img src="https://pub-695760ce26624d30a971e2238b643716.r2.dev/Screenshot%202024-10-31%20041722.png" alt="" className=" rounded-xl" />
              </div>

            <div className=" mt-5 flex justify-between font-cpmono-normal text-white">
              <div className=" flex gap-3">
                <p className=" bg-zinc-800 px-3 py-[6px] rounded-full ">
                  <ShareSvg  className=" w-[19px] inline" /> 124
                </p>
                <p className=" bg-zinc-800 px-3 py-[6px] rounded-full ">
                  <MessageSquare size={20} className=" inline" /> 534
                </p>
              </div>
              <div className=" flex gap-3">
                <p className=" bg-zinc-800 px-3 py-[6px] rounded-full ">
                  <Triangle size={16} strokeWidth={5} className=" neon-upvote inline font-extrabold" /> 1.2k  <Triangle  strokeWidth={5} size={16} className=" inline neon-downVote rotate-180" />
                </p> 
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  {/* <div className=" -mtg-16 p-[1.d4px] bg-[#1e1f20] rounded-xl -ml-1 "> */ }
}

// interface StatsCardProp {
//   leftVal: number | string,
//   rightVal: number | string,
//   leftHead: string,
//   rightHead: string
// }
// const StatsCard = ({ leftVal, rightVal, leftHead, rightHead }: StatsCardProp) => {
//   return <div className="flex justify-between px-2 mt-2 text-sm">
//     <div>
//       <div className={` ${leftHead.includes('Buy') ? " neon-green-nft" : ""} font-bold text-white`}>{leftVal}</div>
//       <div className="text-xs text-gray-500 uppercase font-semibold">{leftHead}</div>
//     </div>
//     <div className="text-right">
//       <div className={` ${rightHead.includes('sell') ? " neon-pink-nft" : ""} font-bold text-white`}>{rightVal} <p className={`inline ${rightHead.includes('listed') ? ' -ml-2' : 'hidden'}`}>%</p> </div>
//       <div className="text-xs text-gray-500 uppercase font-semibold">{rightHead}</div>
//     </div>
//   </div>
// }