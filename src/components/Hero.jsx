import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='w-full h-auto'>
                <img className='w-full hidden md:block' src="./web.jpg" alt="" />
                <img className='w-full md:hidden' src="./mobile.jpg" alt="" />
            </div>
        </>
    )
}

export default Hero
