import React from 'react';

const Card = () => {
  return (
    <div className='md:flex mx-12 '>
      <div className='card_mainDiv'>
        <img className='card_img' src="./book.png" alt="Book" />
        <p className='p1'>1000+</p>
        <p className='p2'>Different Courses</p>
      </div>
      <div className='card_mainDiv'>
        <img className='card_img' src="./student.png" alt="Book" />
        <p className='p1'>700,000+</p>
        <p className='p2'>Students Enrolled</p>
      </div>
      <div className='card_mainDiv'>
        <img className='card_img' src="./card.png" alt="Book" />
        <p className='p1'>10,000+</p>
        <p className='p2'>Successful Transitions</p>
      </div>
    </div>
  );
};

export default Card;
