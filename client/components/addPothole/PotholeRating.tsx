import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const coneSVG = //cone svg/icon
  (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='30'
      fill='currentColor'
      className='bi bi-cone-striped'
      viewBox='0 0 16 16'
    >
      <path d='m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z' />
    </svg>
  );

const ratingArray = [1, 2, 3, 4, 5]; //rating values

const PotholeRating = ({ handleRating }) => {
  return (
    <Form.Group controlId='ratingPot' className='mb-5'>
      <Form.Label>Rate the Pothole</Form.Label>
      <div
        style={{
          border: '2px solid black',
          display: 'flex',
          justifyContent: 'space-evenly',
          minWidth: '500px',
          padding: '2%',
        }}
      >
        <p>Barely a Dent</p>
        <div>
          {ratingArray.map((num) => {
            return (
              <span style={{ padding: '0 5px' }} key={num} onClick={() => handleRating(num)}>
                {coneSVG}
              </span>
            );
          })}
        </div>
        <p>Crater</p>
      </div>
    </Form.Group>
  );
};

PotholeRating.propTypes = {
  handleRating: PropTypes.func.isRequired,
};

export default PotholeRating;
