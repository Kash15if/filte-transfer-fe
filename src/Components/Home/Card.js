import React, { useState } from 'react';
import './Card.css';

const Card = () => {
  return (
    <div>
      <div className='card'>
        <div className='card-image'>
          <img src='https://via.placeholder.com/150' alt='Card Image' />
        </div>
        <div className='card-content'>
          <span className='topic-tag' style={{ backgroundColor: 'blue' }}>
            #Topic
          </span>
          <h2 className='card-title'>Card Title</h2>
          <p className='card-description'>
            This is a brief description of the card content. It provides a quick
            overview of the main points...
          </p>
          <div className='card-tags'>
            <span className='tag'>#tag1</span>
            <span className='tag'>#tag2</span>
            <span className='tag'>#tag3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
