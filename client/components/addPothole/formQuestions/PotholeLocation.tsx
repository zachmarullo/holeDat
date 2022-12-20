import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { AddressAutofill } from '@mapbox/search-js-react';
import PropTypes from 'prop-types';
import axios from 'axios';

const mapToken =
  'pk.eyJ1IjoiemFjaG1hcnVsbG8iLCJhIjoiY2xhazZ5aGxyMDQ3bzNwbzZ2Z3N0b3lpMyJ9.65G-mwqhbWFy77O_I0LkOg';

  //componenent with the location search input form and ability to transform address into lat/lon

const PotholeLocation = ({ handleLocation }) => {
  const [location, setLocation] = useState<string>(''); //stores address from input form
  const [buttonMessage, setButtonMessage] = useState<string>('Add Approximate Address'); //message to be updated when user clicks button

  //turns address into lat and lon coordinates
  const updateLatLon = () => {
    const formattedLocation = location.split(' ').join('%20'); //turn into
    console.log(formattedLocation, 'formatted')
    const mapAPI2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/${formattedLocation}.json?language=en&limit=5&proximity=-121.90662,37.42827&country=US&access_token=${mapToken}`;
    axios
      .get(mapAPI2)
      .then((data) =>
        handleLocation(data.data.features[0].center[1], data.data.features[0].center[0]) //calls function passed down
      )
      .catch((err) => console.log(err));
  };

  return (
    <Form.Group className='mb-5'>
      <InputGroup id='addPotLocation'>
        <AddressAutofill accessToken={mapToken} browserAutofillEnabled={true}>
          <Form.Control
            id='mapfill'
            name='address'
            placeholder='Address'
            type='text'
            autoComplete='street-address'
            onChange={(e) => {
              setLocation(e.target.value)
            }
            }
          />
        </AddressAutofill>
        <div>
          <Button
            variant='flat'
            onClick={(e) => {
              if (location) {
                e.currentTarget.disabled = true;
                setButtonMessage('Address Added');
                updateLatLon();
              }
            }}
          >
            {buttonMessage}
          </Button>
        </div>
      </InputGroup>
    </Form.Group>
  );
};

PotholeLocation.propTypes = {
  handleLocation: PropTypes.func.isRequired,
};

export default PotholeLocation;
