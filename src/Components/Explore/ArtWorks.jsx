import axios from 'axios'
import { ethers, Signer } from 'ethers'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import abi from './abi.json'
// import {useSDK} from '@thirdweb-dev/react'
// import { useNFTCollection } from '@thirdweb-dev/react'
// const contract = require("../artifacts/contracts/ArGram.sol/ArGram.json");

// const provider = new ethers.providers.JsonRpcProvider(API_URL);
// const signers = ethers.getSigner()
// const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
// //Get gas price
// const gasPrice = await provider.getGasPrice();
// //Grab contract ABI and create an instance
// const nftContract = new ethers.Contract(
//    CONTRACT_ADDRESS,
//    contract.abi,
//    wallet
// );
//Estimate gas limit
// const gasLimit = await nftContract.estimateGas["safeTransferFrom(address,address,uint256)"](PUBLIC_KEY, USER_ADDRESS, tokenId, { gasPrice });
//Call the safetransfer method
// const transaction = await nftContract["safeTransferFrom(address,address,uint256)"](PUBLIC_KEY, USER_ADDRESS, tokenId, { gasLimit });
//Wait for the transaction to complete
// await transaction.wait();
// console.log("Transaction Hash: ", transaction.hash);

const ArtWorks = ({items}) => {
  // const nftCollection = useNFTCollection("0x2B3dF7078A1cb1304375C24b422E6C8927155248")
  // console.log(nftCollection)
  // console.log(items[0].attributes.title, "data");
  // console.log(items[0])
  const [res, setRes] = useState()
  const [dataNFT, setDataNFT] = useState([])
  const products = items || []

  // const { address, isConnected } = useAccount();
  // const { signer } = useSigner();

  const smartContract = "0x2B3dF7078A1cb1304375C24b422E6C8927155248"
  const rwid = "0x5aB9A41F06CD5767E19a5499a9dA6e4e7DA2E51d"
  const visitors = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  
  // const sdk = useSDK();

// native currency balance
// async function getNFTs() {
//   const nfts = await nftCollection.getAll()
//   return setDataNFT(nfts)
// }

useEffect(() => {
  // getNFTs()
}, [])

console.log(dataNFT, "coba frontend");

  const TransferTo = async () => {
    // const endpoint = 'http://localhost:3000/blockchain/transfer-nft'
    // await window.ethereum.enable()

    // const balance = await sdk.wallet.balance();
    // await window.ethereum.send('eth_requestAccounts')
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const provider = new ethers.providers.Web3Provider(web3.currentProvider);

    // const data = await provider.send("personal_signTransaction")
    // const a = await Signer.connect(provider)
    const data  = await provider.send("eth_requestAccounts", []);
    // const signer = provider.getSigner();
    const signered = provider.getSigner(data[0])
    const nftContractReadonly = new ethers.Contract(smartContract, abi, provider);
    const nftContract = nftContractReadonly.connect(signered);

    // const dat = await signered.
    // console.log(dat, "hasil signer")
    try {
      // const result = await axios.post(endpoint, {
      //   params: {
      //     signer: signered,
      //     to: visitors,  
      //     token: 35
      //   }
      // })
      // const result = nftContract.safeTransferFrom(visitors, rwid, 35);
      const res = nftContract["safeTransferFrom(address,address,uint256)"](visitors, rwid, 35);
      console.log(res, "hasil result");
      setRes(res);
      // console.log(res, "data yang berhasil di transfer")
    } catch (error) {
      console.log(error, "proses gagal");
    }
    // alert('clicked')
  }

  return (
    // <WagmiConfig client={client}>
    <section className="inner-explore-products">
    <div className="container">
      <div className="explore-product-filter">
        <div className="section-title mb-45">
          <h2 className="title">Artworks <img src="assets/img/icons/title_icon01.png" alt="" /></h2>
        </div>
        {/* <div className="filter-wrap">
          <form action="#">
            <div className="filter-item">
              <label className="title">FILTER BY:</label>
              <label className="switch">
                <input type="checkbox" />
                <span className="button" />
              </label>
            </div>
            <div className="filter-item">
              <label className="title">Has list price:</label>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="button" />
              </label>
            </div>
            <div className="filter-item">
              <label className="title">Has open offer</label>
              <label className="switch">
                <input type="checkbox" />
                <span className="button" />
              </label>
            </div>
            <div className="filter-item">
              <label className="title">Owned by creator</label>
              <label className="switch">
                <input type="checkbox" />
                <span className="button" />
              </label>
            </div>
            <div className="filter-item">
              <label className="title">Has sold</label>
              <label className="switch">
                <input type="checkbox" />
                <span className="button" />
              </label>
            </div>
            <button className="btn filter-btn"><i className="fi-sr-filter" /> filter</button>
          </form>
        </div> */}
      </div>
      <div className="row justify-content-center">
        {/* Items start */}
        {/* {items.map((item, idx) => ( */}
        {products.map((item, idx) => (
          <div key={idx} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="top-collection-item">
              <div className="collection-item-top">
                <ul>
                  <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
                  <li className="info-dots dropdown">
                    <span />
                    <span />
                    <span />
                    {/* <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                    <ul className="dropdown-menu">
                      <li><a href="/nft-marketplace">Artwork</a></li>
                      <li><a href="/nft-marketplace">Action</a></li>
                      <li><a href="/nft-marketplace">Author Action</a></li>
                    </ul> */}
                  </li>
                </ul>
              </div>
              <div className="collection-item-thumb">
                <Link to="/market-single"><img src={item?.attributes.images[0].path} alt="" /></Link>
              </div>
              <div className="collection-item-content">
                <h5 className="title"><a href="/market-single">{item?.attributes.title}</a> <span className="price">{item?.attributes.price}</span></h5>
              </div>
              <div className="collection-item-bottom">
                <ul>
                  <li className="bid"><div onClick={() => TransferTo()} className="btn">place a bid</div></li>
                  <li className="wishlist"><a href="/#">59</a></li>
                </ul>
              </div>
            </div>
          </div>
        ))}
        
        {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection05.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">Pie Collection</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/#">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection06.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">Artwork Collection</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/#">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection07.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">Action Collection</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/#">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection08.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">Craft Collection</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/#">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection09.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">NFT Collection</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/#">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection10.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">Artwork Collection</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/#">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection11.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">NFT Collection</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="//#">59</a></li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </section>
  // </WagmiConfig>
  )
}

export default ArtWorks