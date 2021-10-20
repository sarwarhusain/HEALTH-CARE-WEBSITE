import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 24.894930,
  lng: 91.868706
};
const Maps = () => {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;