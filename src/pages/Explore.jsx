import React from 'react'
import NftMarket from '../Components/Explore/NftMarket'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import SideBar from '../Components/IndexOne/SideBar'
// import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

// the chainId our app wants to be running on
// for our example the Polygon Mumbai Testnet
// const desiredChainId = ChainId.Mumbai;




const Explore = () => {
  return (
    // <ThirdwebProvider desiredChainId={desiredChainId}>
    <>
      {/* <SideBar/> */}

    
    <div className="main-content">
    <Header/>
        <NftMarket/>

    </div>
    {/* <Footer/> */}
    {/* </ThirdwebProvider> */}
   </>
  
  )
}

export default Explore