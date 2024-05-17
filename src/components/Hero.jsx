import React from 'react'

const Hero = ({title="Become a React Dev",sub="Find the React job that fits your skill set"}) => {
  return (
    <>
        <section className="bg-indigo-700">
            <div className="flex flex-col justify-center w-full items-center py-16 md:py-20 space-y-2">
                <h1 className="text-white text-3xl md:text-6xl text-center font-bold">
                    {title}
                </h1>
                <h2 className="text-white text-lg md:text-xl text-center">
                    {sub}
                </h2>
            </div>
        </section>
    </>
  )
}

export default Hero