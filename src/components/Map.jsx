import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  useMap,
  useMapEvents,
} from 'react-leaflet';

import PropTypes from 'prop-types';

import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/mapview.css';
import { useState, useEffect } from 'react';

MapContainer.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
    })
  ).isRequired,
};

const MarkerGroup = ({ markers }) => {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(markers.map((marker) => marker.geocode));
    map.flyToBounds(bounds, { padding: [140, 50] });
  }, [markers, map]);

  return (
    <FeatureGroup
      eventHandlers={{
        click: () => console.log('A member of the Feature Group was clicked'),
      }}
    >
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.geocode}>
          <Popup>{marker.popup}</Popup>
        </Marker>
      ))}
    </FeatureGroup>
  );
};

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function MapView() {
  // MapComponent();
  const [coords, setCoords] = useState([20.72356, -103.38479]); // Default coordinates
  const [loading, setLoading] = useState(true);
  const [markers, setMarkers] = useState([
    { geocode: [19.2826, -99.6557], popup: 'Amenaza. Tipo: Grave' }, // Mexico, CDMX
    { geocode: [25.6866, -100.3161], popup: 'Amenaza. Tipo: Grave' }, // Monterrey
    { geocode: [19.8301, -90.5349], popup: 'Amenaza. Tipo: Grave' }, // Mexico, Campeche
    // { geocode: [35.8617, 104.1954], popup: 'Amenaza. Tipo: Grave' }, // China
  ]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords([position.coords.latitude, position.coords.longitude]);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []); // Empty dependency array means this effect runs once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="map" className="w-64 h-64">
      <MapContainer
        center={coords}
        zoom={1}
        scrollWheelZoom={true}
        markers={markers}
      >
        <TileLayer
          attribution="&copy; Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL"
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        />
        <MarkerGroup markers={markers} />
      </MapContainer>
    </div>
  );
}
