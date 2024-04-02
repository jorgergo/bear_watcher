import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  useMap,
} from 'react-leaflet';

import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/mapview.css';
import { useState, useEffect } from 'react';

const fakeData = [
  { geocode: [19.2826, -99.6557], popup: 'Amenaza. Tipo: Baja' }, // Mexico, CDMX
  { geocode: [25.6866, -100.3161], popup: 'Amenaza. Tipo: Media' }, // Monterrey
  { geocode: [19.8301, -90.5349], popup: 'Amenaza. Tipo: Alta' }, // Mexico, Campeche
  // { geocode: [35.8617, 104.1954], popup: 'Amenaza. Tipo: Grave' }, // China
];

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
        <Marker key={index} position={marker.geocode}>
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
    { geocode: [19.2826, -99.6557], popup: 'Amenaza. Tipo: Grave' }, // Mexico, CDMX
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

  // replace the current markers with the new ones from the fake data
  useEffect(() => {
    setMarkers(() => [...fakeData]);
  }, []);

  console.log(markers);

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
        <GroupMarkers markers={markers} />
      </MapContainer>
    </div>
  );
}
