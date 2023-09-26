import React from 'react'

const Nav = () => {
    return (
        <>
            <div className='Nav_main'>
                <div className='logo'><img className='' src="./PWSkills-white.png" alt="" /></div>
                <div >
                    <ul className='ul'>
                        <li className='mx-3'>Home</li>
                        <li className='mx-3'>About Us</li>
                        <li className='mx-3'>Contact Us</li>
                    </ul>
                </div>
                <div className='Login_Signup'>LogIn/SignUp</div>
                <div className='md:hidden'>
                    <a className='text-4xl' href="#">&#8801;</a>
                </div>
            </div>
        </>
    )
}

export default Nav
