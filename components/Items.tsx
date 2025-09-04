import Image from 'next/image'
import React from 'react'

const Items = () => {
    const images = [
        {src: "/logo-1.png", alt: "cert1"},
        {src: "/logo-2.png", alt: "cert2"},
        {src: "/logo-3.png", alt: "cert3"},
        {src: "/logo-4.png", alt: "cert4"},
    ]
  return (
    <div className='my-5 py-5 '>
        <h1 className='text-5xl  font-bold  mx-10'>
            Built on Trust: Our Certifications & <br/>Industry Standards
        </h1>
        <h2 className='text-2xl  font-medium mx-10 my-5 text-green-700'>
            We Prioritize Quality, Safety, and Sustainability in Every Product.
        </h2>
        <div className='my-10 flex items-center justify-center gap-10'>
            {images.map((item, index) => (
                <Image
                    key={index}
                    src={item.src}
                    alt={item.alt}
                    width={150}
                    height={150}
                    className='m-5 inline-block'
                />
            ))}
        </div>
    </div>
  )
}

export default Items