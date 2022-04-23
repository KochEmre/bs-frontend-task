import React from 'react'
import "./googleMap.scss"
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import MarkerImage from "./../../assets/images/marker.png"
 

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 42.42526021130788,
  lng: 19.238922978652784
};

function MarkedLocationMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    // setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
          position={center}
          icon={MarkerImage}
        />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MarkedLocationMap)