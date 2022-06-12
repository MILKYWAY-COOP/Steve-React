import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

// load the css and the map style from a local file
import styles from './styles/map.module.css';
import mapStyle from './styles/map.json';

function MapComponent(props) {
  const { google, latitude, longitude } = props;

  const mapLoaded = (mapProps, map) => {
    // once the map has loaded change the styles
    map.setOptions({
      styles: mapStyle
    });
  };

  return (
    <div className={styles.map}>
      <Map
        google={google}
        zoom={14}
        initialCenter={{
          lat: latitude,
          lng: longitude
        }}
        onReady={(mapProps, map) => mapLoaded(mapProps, map)}
        zoomControl={false}
        mapTypeControl={false}
        scaleControl={false}
      >
        <Marker
          name={'Current location'}
          position={{
            lat: latitude,
            lng: longitude
          }}
        />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  // add the API key to the Google Maps API
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapComponent);
