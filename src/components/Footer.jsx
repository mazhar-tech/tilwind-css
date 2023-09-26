import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row md:px-14 flex-wrap justify-between '>
                <div>
                    <img className='w-44 h-16' src="./PWSkills-white.png" alt="" />
                    <p className='my-4'><span className='font-bold text-orange-300'>Email Us:</span> support@microsoft.com</p>
                    <img className='w-32 h-32' src="./iso-9001-2015.svg" alt="" />
                </div>
                <div className=''>
                    <h2 className='font-bold text-xl mt-4'>PW Skills</h2>
                    <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2 '> </div>
                    <div>
                        <p>About Us</p>
                        <p>FAQs</p>
                        <p>Privacy Poliecy</p>
                    </div>
                </div>
                <div className=''>
                    <h2 className='font-bold text-xl mt-4'>PW Skills</h2>
                    <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2 '> </div>
                    <div>
                        <p>About Us</p>
                        <p>FAQs</p>
                        <p>Privacy Poliecy</p>
                    </div>
                </div>
                <div className=''>
                    <h2 className='font-bold text-xl mt-4'>PW Skills</h2>
                    <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2 '></div>
                    <div>
                        <p>About Us</p>
                        <p>FAQs</p>
                        <p>Privacy Poliecy</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
