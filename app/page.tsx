
import Images from '@/components/Images'
import Items from '@/components/Items'
import NavBar from '@/components/NavBar'
import Homepage from '@/components/Homepage'

import React from 'react'

const page = () => {
  return (
    <div>
      <NavBar/>
      <Images/>
      <Homepage/>
      <Items/>
    </div>
  )
}

export default page