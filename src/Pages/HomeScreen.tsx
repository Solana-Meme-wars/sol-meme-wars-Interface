 
// import {ChevronUp, DiscIcon, Earth, RefreshCcw, Twitter} from 'lucide-react'
// import { NftCard } from "../components/common/NftCards"
// import { dummyNft } from "../data/dummyNft"
// import { Compress } from "../assets/icons/Compress"
// import { Spl20 } from "../assets/icons/Spl20"
// import { NewNftCard } from '../components/common/NewNftCard'
import { LeftSection } from '../ScreenSections/HomeScreenSections/LeftSection'
import { MidSection } from '../ScreenSections/HomeScreenSections/MidSection'
import { RightSection } from '../ScreenSections/HomeScreenSections/RightSection'

export const Home = ()=>{
  return  <div className="flex h-screen overflow-hidden w-full">
    <div className="w-[17%] mt-20 h-  overflow-y-auto no-scrollbar bg-secondary border-r  border-[#303131]">
        <LeftSection />
      </div>
  <div className="w-[63%] h-sc reen overflow-y-auto no-scrollbar mt-[73px]">
    <MidSection />
  </div>

  <div className="w-[20%] h-sc reen overflow-y-auto no-scrollbar mt-20 bg-secondary border-l border-[#303131]">
    <RightSection />
  </div>
</div>

}