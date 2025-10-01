import React from 'react'

const Images = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="video2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (dark layer for better text visibility) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Cultivating Growth, Harvesting Success.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
          Where healthy soil meets healthy yield.
        </p>
        <button className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Images
