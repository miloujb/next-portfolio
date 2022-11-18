import React from 'react';

const Hero = () => {
  return(
      <>
        <div className="flex items-center justify-centre h-screen mb-12 bg-fixed bg-cover custom-img">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]"/>
            <div className="p-5 z-[2] ml-[2rem] mt-[2rem] text-white">
                <h2 className="text-5xl font-bold">
                    Heading
                </h2>
                <p className="py-5 text-xl">Message</p>
                <p className="px-8 py-2 border">Book</p>
            </div>
        </div>
      </>
  )
}

export default Hero