import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { ReactComponent as MarkerIcon } from '../../assets/icons/marker.svg';
import "./googleMap.scss"

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 42.42526021130788,
  lng: 19.238922978652784
};

function MarkedLocationMap() {
  return (
    <LoadScript
      googleMapsApiKey=""
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        {/*TODO: Marker is not working. Why ? */}
        {/* <Marker
          position={center}
          zoom={18}
          icon={MarkerIcon}

        /> */}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MarkedLocationMap)