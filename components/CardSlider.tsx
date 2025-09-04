import { CardCarousel } from "@/components/ui/card-carousel"
import React from 'react'

const CardSlider = () => {
    const images = [
    { src: "https://images.unsplash.com/photo-1609252509027-3928a66302fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Image 1" },
    { src: "https://images.unsplash.com/photo-1623211269755-569fec0536d2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Image 2" },
    { src: "https://images.unsplash.com/photo-1677125062085-6a831b38efc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Image 3" },
  ]
  return (
    <div className="m-5">
        <div className="pt-40">
            <CardCarousel
                images={images}
                autoplayDelay={2000}
                 showPagination={true}
                 showNavigation={true}
            />
    </div>
    </div>
  )
}

export default CardSlider