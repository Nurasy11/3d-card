import React from 'react';
// logo
import LogoImg from '../img/logo.svg';
// nike img
import NikeImg from '../img/nike.png';

const Card = () => {
  const colors = [
    { value: '#b6a179' },
    { value: '#272425' },
    { value: '#6389cb' },
    { value: '#f2c758' },
    { value: '#ffffff' },

  ]
  return (
    //card wrapper
    <div>
      {/* Card */}
      < div className='w-[426px] min-h-[600px] bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab'>
        {/* Card logo*/}
        <div className='wb-6'>
          <img src={LogoImg} alt="" />
        </div>
        {/* Card title*/}
        <h1 className='text-5xl mb-6 font-extrabold'>Nike Air Max Pre-Day</h1>
        {/* Card subtitle*/}
        <p className='max-w-[300px] text-[#000000] mb-6'>Talking the classic look of heritage Nike into new realm, the Nike Air Max Pre-Day brings you a fast-paced look that's ready for today's world.</p>
        {/* btn & price wrapper*/}
        <div>
          <button className='bg-[#2d2b2c] text-white thet-base base font-medium py-[16px] px-[40px] rounded-lg' >Add to list</button>
          <div >price</div>
        </div>
        {/* colors */}
        <ul>
          {colors.map((color, index) => {
            return (
              <li
                key={index}
                style={{ backgroundColor: color.value }}
                className='w-8 h-8 rounded-full cursor-pointer'
              ></li>
            )
          })}
        </ul>
        {/* card image */}
        <div>
          <img src={NikeImg} alt="" />
        </div>

      </div>
    </div>

  );
};
export default Card;
