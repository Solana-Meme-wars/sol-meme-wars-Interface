import { NewNftCard } from "../../components/common/NewNftCard"
import { AppDispatch, RootState } from "../../Redux/store"
import { useDispatch, useSelector } from "react-redux" 
import { useEffect } from "react"
import { fetchNfts } from "../../Redux/main Data/nftsSlice"

 

export const MidSection = ()=>{
  const dispatch = useDispatch<AppDispatch>() 
  const {nfts,loading} = useSelector((state:RootState)=>state.nft)
  // const { nfts } = useSelector((state:RootState)=>state.dummyData)
  console.log("nftssss ");
  console.log(nfts);
  
  
 useEffect(()=>{
   dispatch(fetchNfts())
 },[])

//  const testNft = [
//   {
//     "id": 1,
//     "nftMint": "8oa17JZ6TRaiDeChPp6BdLXMojBQKnJJHuTxGt7pM5d8",
//     "tokenAccount": "Hw1Mi6Wiyr3aPhPoq2Gxx4KszaL5MGQVjCjdMPv9VoeU",
//     "creator": "Alex smith",
//     "title": "Bulbasaur",
//     "description": null,
//     "imageUrl": "https://arweave.net/31l6YPPbXN7JBlii4Z0UL-U9APJeyJS3v23uuKg85Cc",
//     "isForSale": false,
//     "price": null,
//     "createdAt": "2025-01-11T17:48:25.372Z",
//     "updatedAt": "2025-01-11T17:48:25.372Z",
//     "status": "active",
//     "metadata": {
//       "name": "Bulbasaur",
//       "symbol": "BLB",
//       "collection": null
//     }, 
//   }
//  ]
 
 if(loading){
  return <div className=' h-screen bg-black flex items-center justify-center text-white text-xl font-semibold'>Loading....</div>
}

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
    <NewNftCard key={idx} name={nft.metadata.name} owner={nft.creator} spread={nft.spread} img={nft.imageUrl} buy={nft.buy} sell={nft.sell} listed={nft.listed} listedpercent={nft.listedpercent} Mcap={nft.mcap} vol24h={nft.vol24h} />
  </div>
  )}  
</div>
</div>
  </section>
}