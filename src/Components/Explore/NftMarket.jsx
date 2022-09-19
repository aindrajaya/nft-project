import React, { useEffect, useState } from 'react'
import Category from '../Category/Category'
import WeekFeatures from '../IndexOne/WeekFeatures'
import Banner from './Banner'

import ArtWorks from './ArtWorks'
import axios from 'axios'




const NftMarket = () => {
  const [items, setItems] = useState()

  const getData = async () => {
    try {
      const data = await axios.get('https://api-staging.artopologi.com/v1/products')
      const res = data.data
      setItems(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(items, 'data dari backend')
  return (
    <main>
        <Banner title="NFT Marketplace"/>
        {/* <Category/> */}
        <ArtWorks items={items}/>
        {/* <WeekFeatures/> */}
    </main>
  )
}

export default NftMarket