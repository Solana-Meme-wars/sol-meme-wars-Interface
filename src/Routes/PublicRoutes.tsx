import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/HomeScreen";
import { Navbar } from "../components/common/Navbar";
import { UserProfile } from "../Pages/UserProfile";
import { NftPage } from "../Pages/NftPage";

export const PublicRoutes = ()=>{
  return <div>
    <Navbar/>
   <Router>
  <Routes>
    <Route index element={<Home/>} />
    <Route path="/profile/:userName" element={<UserProfile/>} />
    <Route path="/nft/:nftName" element={<NftPage/>} />
  </Routes>
 </Router>
  </div>
}