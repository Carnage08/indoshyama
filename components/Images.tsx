import React from 'react'

const Images = () => {
  return (
    <div>
     <div className="flex justify-center h-full bg-gray-100 dark:bg-neutral-900">
              <video
                className="w-full h-full object-cover rounded-lg"
                src="video2.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
    </div>
  )
}

export default Images