import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/mapview.css';
import { useState, useEffect } from 'react';

const MapView = function () {
  const [coords, setCoords] = useState([20.72356, -103.38479]); // Default coordinates
  const [loading, setLoading] = useState(true);

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
      <MapContainer center={coords} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution="&copy; Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL"
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default MapView;
