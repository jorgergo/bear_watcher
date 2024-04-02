import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  useMap,
} from 'react-leaflet';

import L from 'leaflet';

import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/mapview.css';
import { useState, useEffect } from 'react';

const attackIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/14090/14090313.png',
  iconSize: [25, 25],
});

const normalIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/8065/8065834.png',
  iconSize: [25, 25],
});

// Function that returns an object with the same structure as the fake data objects, with random coordinates and a generic popup message for all of them.
const randomAttack = () => ({
  // geocode: [Math.random() * 180 - 90, Math.random() * 360 - 180],
  // limit the coordinates to North America
  geocode: [Math.random() * 40 + 10, Math.random() * 100 - 130],
  // Generate a random number between 1 and 2
  popup: 'Amenaza',
  type: Math.floor(Math.random() * 2) + 1,
});

const GroupMarkers = ({ markers }) => {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(markers.map((marker) => marker.geocode));
    map.flyToBounds(bounds, { padding: [150, 50] });
  }, [markers, map]);

  return (
    <FeatureGroup
      eventHandlers={{
        click: () => console.log('A member of the Feature Group was clicked'),
      }}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.geocode}
          icon={marker.type === 1 ? attackIcon : normalIcon}
        >
          <Popup>{marker.popup}</Popup>
        </Marker>
      ))}
    </FeatureGroup>
  );
};

export default function MapView() {
  const [coords, setCoords] = useState([20.72356, -103.38479]); // Default coordinates
  const [loading, setLoading] = useState(true);
  const [markers, setMarkers] = useState([
    { geocode: [19.2826, -99.6557], popup: 'Default', type: 3 }, // Mexico, CDMX
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

  // Use the randomAttack function to generate a new marker every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMarkers((prevMarkers) => [...prevMarkers, randomAttack()]);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log(markers);

  if (loading) {
    return (
      <div className="loader_container">
        <div className="loader"></div>
      </div>
    );
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
        <GroupMarkers markers={markers} />
      </MapContainer>
    </div>
  );
}
