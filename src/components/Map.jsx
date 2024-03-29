import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// Import the custom css for the map src/components/mapview.css
import './mapview.css';

const position = [51.505, -0.09];

const MapView = function () {
  return (
    <div id="map" className="w-64 h-64">
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution="&copy; Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL"
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
