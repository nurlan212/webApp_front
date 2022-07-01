import React from 'react';
import './CustomCard.css';

const CustomCard = (props) => {
  const imagePath = props.image
    ? props.image
    : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
  return (
    <div className='Card'>
      <div className='Card__img'>
        <img src={imagePath} alt='card' />
      </div>
      <div className='Card__content'>
        <p>{`${props.firstLabel}: ${props.firstText}`}</p>
        <p>{`${props.secondLabel}: ${props.secondText}`}</p>
      </div>
    </div>
  );
};

export default CustomCard;
