import {  useParams } from 'react-router-dom'
import { dummyNftData } from '../data/dummyData'
import { Section1 } from '../Sections/NftPageSections/Section1'
import { motion } from 'framer-motion'
import { Section2 } from '../Sections/NftPageSections/Section2'
import { Section3 } from '../Sections/NftPageSections/Section3'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'


export const NftPage = () => {
  const { nftData } = useSelector((state:RootState)=>state.dummyData)
  
  const {nftName} = useParams() 
  
  const allData = nftData[nftName as keyof typeof nftData] 
  
if(!allData){
  return <div  className=' text-white mt-20  h-screen flex justify-center text-[24px] items-center'>User doesn't exist at this moment


  </div>;
} 

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0.3 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "100%", opacity: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className=' overflow-x-hidden w-dfull'>
      <Section1 nftName={allData.nftName} banner={allData.banner} nftImage={allData.nftImage} creator={allData.creator} currentOwner={allData.currentOwner} nftDetails={allData.nftDetails} />
      <Section2 addressDetails={allData.addressDetails} />
      <Section3 comments={allData.comments} />
    </motion.div>
  )
}
