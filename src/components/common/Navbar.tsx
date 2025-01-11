import { ChevronDown, Search } from "lucide-react"
import { Logo } from "../../assets/icons/Logo"
import { useLocation } from "react-router-dom" 

import { 
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui'
 
import { useState } from "react";

import '@solana/wallet-adapter-react-ui/styles.css'
import { AnimatePresence, motion } from "framer-motion"
import { PostNft } from "./PostNft";
import { useRecoilState } from "recoil";
import { popupState } from "../../libs/atoms";

export const Navbar = () => { 
  const [connected, SetConnected] = useState(false);
  const params = useLocation();

  const [postNft, setPostNft] = useRecoilState(popupState);

  console.log('params = ', params);


  return (!(params.pathname === '/signup' || params.pathname === '/login') &&
    // <ConnectionProvider endpoint={endpoint}>
    //   <WalletProvider wallets={[]} autoConnect>
        // <WalletModalProvider>
          <div className=" border-b border-gray-600 text-gray-300 fixed w-full top-0 z-50  bg-[#111314]">
            <div className="  flex gap-7 items-center text-[12.7px] font-cpmono-normal font-semib old px-5 w-full">
              <div className=" flex items-center gap-3 font-cpmono-heading">
                <a href="/" className=" flex justify-center items-center">
                  <Logo />
                  <p className=" w- 28 uppercase neon-text">Solmemewars</p>
                </a>
                <div className=" flex ml-3 gap-3 items-center justify-center">
                  {/* <p className="nav-text w-20  cursor-pointer uppercase font-bold text-[17px] text-nav">Trade<ChevronDown size={16} className=" inline ml-2 " /></p> */}
                  <p
                  onClick={()=>setPostNft(true)}
                   className="nav-text w-36 ml-3  cursor-pointer uppercase font-bold text-[17px] text-nav">Post NFT<ChevronDown size={16} className=" inline ml-2 " /></p>
                  <p className="nav-text w-44 ml-3  cursor-pointer uppercase font-bold text-[17px] text-nav">Trending NFT<ChevronDown size={16} className=" inline ml-2 " /></p>
                  {/* <p className=" w-64 text-gray-300 uppercase neon-pink-star"> <Star size={17} className=" fill-[#FF8AAD]  neon-pink-star inline"/> rewards<ChevronDown size={16} className=" inline ml-2 "/></p>   */}
                </div>
              </div>
              <div className=" flex gap-2 px-2 border w-full border-gray-800 rounded-md items-center">
                <Search width={17} />
                <div className="">
                  <input type="text" placeholder="Search by Collection" className=" py-2 bg-transparent w-full text-[13px] outline-none" />
                </div>
              </div>

              <div className=" w-[500px] flex justify-end items-center">
                {/* <button className=" text-black font-bold font-cpmono-heading px-3 py-[6px] rounded-md bg-[#8EFBC1]  uppercase ">connect wallet </button> */}
                <div className=" flex gap-1">
                  <div onClick={() => {
                    console.log("connect clicked! ");
                    // SetWalletConnect(true)
                  }}>

                    <WalletMultiButton
                     onClick={()=>SetConnected(!connected)}
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontFamily: "'CP Mono Heading', monospace",
                        lineHeight:"17px",
                        padding: "1px 12px",
                        borderRadius: "0.375rem", // rounded-md
                        backgroundColor: "#8EFBC1",
                        textTransform: "uppercase"
                      }}
                      className=" font-bold   font-cpmono-heading"
                    > {connected?"Connect Wallet":""}
                    </WalletMultiButton>
                  </div>
                  <div   >
                    {/* <WalletDisconnectButton /> */}
                  </div>
                </div>
                <ChevronDown size={16} className=" inline ml-2 " />
              </div>
            </div>
            
            <AnimatePresence>
     { postNft && <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50" 
     >
      <div className=' overflow-y-scroll no-scrollbar w-full max-w-xl z-[99999] '>
          <PostNft/>
      </div>
     </motion.div>}
      </AnimatePresence>

          </div>
        //  {/* </WalletModalProvider> */}
  //  {/* //   </WalletProvider>
  //   // </ConnectionProvider> */}
  )
}