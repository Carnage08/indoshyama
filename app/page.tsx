import CardSlider from '@/components/CardSlider'
import Images from '@/components/Images'
import Items from '@/components/Items'
import NavBar from '@/components/NavBar'

import React from 'react'

const page = () => {
  return (
    <div>
      <NavBar/>
      <Images/>
      <CardSlider/>
      <Items/>
    </div>
  )
}

export default page