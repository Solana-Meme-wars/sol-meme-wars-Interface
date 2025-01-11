import {  useParams } from 'react-router-dom'
import { Section1 } from '../ScreenSections/UserProfileSections/Section1'
import { Section2 } from '../ScreenSections/UserProfileSections/Section2'
import { Section3 } from '../ScreenSections/UserProfileSections/Section3' 
import {AnimatePresence, motion} from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'

export const UserProfile = () => {

  const {profiles} = useSelector((state:RootState)=>state.dummyData) 

  
  const {userName} = useParams()
  console.log("user", userName);
  
  const allData  = profiles[ userName as keyof typeof profiles]
  
    
if(!allData){
  return <div  className=' text-white  h-screen flex justify-center text-[24px] items-center'>User doesn't exist at this moment

  </div>;
}

  return (
    <AnimatePresence>

    <motion.div
    initial={{ x: "100%", opacity: 0.3 }}
    animate={{ x: "0%", opacity: 1 }}
    exit={{ x: "100%", opacity: 0.3 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className=' overflow-x-hidden w-full'>
      <Section1 userName={allData.userName} banner={allData.banner} profilePic={allData.profilePic} joined={allData.joined} trendingNftDetails={allData.trendingNftDetails}/>
      <Section2 addressDetails={allData.addressDetails} /> 
      <Section3 allNftDetails={allData.allNFts} buyNftDetails={allData.buyNFts}/>
    </motion.div>
      </AnimatePresence>
  )
} 
 