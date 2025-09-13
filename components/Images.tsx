import React from 'react'

const Images = () => {
  return (
    <div>
     <div className="flex justify-center h-full bg-gray-100 dark:bg-neutral-900">
              <video
                className="w-full h-full object-cover rounded-lg"
                src="https://drive.google.com/uc?export=view&id=1gjKV_gjmRP5v-KPhjiZHlyeSIADTelnS"
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