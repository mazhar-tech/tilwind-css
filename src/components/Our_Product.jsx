import React from 'react'

const Our_Product = () => {
  return (
    <>
      <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-10'>
        <div className=' h-auto w-full flex flex-wrap flex-col items-center text-center'>
          <p className=' text-indigo-800 font-bold text-xl md:text-3xl'>Our products</p>
          <div className='Border_Line'></div>
        </div>
      </div>
      <div className='w-[100%] h-auto flex flex-wrap flex-col items-center md:flex-row px-12 '>
        <div className='card_mainDiv border-2'>
          <img className='card_img' src="./book.png" alt="Book" />
          <p className='p1 text-xl'>PW Skills Labs</p>
          <p className='p2'>Lorem ipsum dolor sit amet, consec</p>
        </div>
        <div className='card_mainDiv mt-7'>
          <img className='card_img w-14' src="./student.png" alt="Book" />
          <p className='p1 text-xl'>Jobs Portal</p>
          <p className='p2'>Lorem ipsum dolor sit amet, consec</p>
        </div>
        <div className='card_mainDiv mt-7 '>
          <img className='card_img w-14' src="./card.png" alt="Book" />
          <p className='p1 text-xl'>Experience Prortal</p>
          <p className='p2'>Lorem ipsum dolor sit amet, consec</p>
        </div>
        <div className='card_mainDiv mt-7'>
          <img className='card_img w-14' src="./student.png" alt="Book" />
          <p className='p1 text-xl'>Affiliate</p>
          <p className='p2'>Lorem ipsum dolor sit amet, consec</p>
        </div>
        <div className='card_mainDiv'>
          <img className='card_img ' src="./book.png" alt="Book" />
          <p className='p1 text-xl'>Hall of Fame</p>
          <p className='p2'>Lorem ipsum dolor sit amet, consec</p>
        </div>
      </div>
    </>
  )
}

export default Our_Product
