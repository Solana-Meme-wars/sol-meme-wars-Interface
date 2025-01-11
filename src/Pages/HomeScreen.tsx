  
import { LeftSection } from '../ScreenSections/HomeScreenSections/LeftSection'
import { MidSection } from '../ScreenSections/HomeScreenSections/MidSection'
import { RightSection } from '../ScreenSections/HomeScreenSections/RightSection' 

export const Home = ()=>{ 
  // const navigate = useNavigate()  

  // useEffect(()=>{
  //   const token =  Cookies.get('NFTtoken')
  //   if(!token){
  //     navigate('/signup')
  //   }   
  // },[]) 
  return  <div className="flex h-screen overflow-hidden w-full">
    <div className="w-[17%] pt-16 h-  overflow-y-auto no-scrollbar bg-secondary border-r  border-[#303131]">
        <LeftSection />
      </div>
  <div className="w-[63%] h-sc reen overflow-y-auto no-scrollbar mt-[73px]">
    <MidSection />
  </div>

  <div className="w-[20%] h-sc reen overflow-y-auto no-scrollbar pt-20 bg-secondary border-l border-[#303131]">
    <RightSection />
  </div>
</div>

}