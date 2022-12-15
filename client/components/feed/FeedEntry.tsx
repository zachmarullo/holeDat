import React from 'react';
import { Link } from 'react-router-dom';

const FeedEntry = ({ imgObj }) => {
  

  return (
    <div>
      <h3>Image Id: {imgObj.image_id}</h3>
      <Link to={`/Pothole:${imgObj.pothole_id}`}>
        <img
          style={{ borderRadius: '18px' }}
          src={imgObj.photoURL}
          alt='Image'
          width='50%'
          height='50%'
        />
      </Link>
    </div>
  );
};

export default FeedEntry;
