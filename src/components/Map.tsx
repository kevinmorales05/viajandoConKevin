import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

// Carga Leaflet dinámicamente
let L: typeof import("leaflet") | undefined = undefined;
if (typeof window !== "undefined") {
  L = require("leaflet");
}

// Configurar íconos solo si L está definido
if (L) {
  L.Marker.prototype.options.icon = L.icon({
    iconUrl: "/leaflet/marker-icon.png", // Ruta correcta del ícono
    iconRetinaUrl: "/leaflet/marker-icon-2x.png",
    shadowUrl: "/leaflet/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
}

// Cargar el mapa dinámicamente deshabilitando SSR
const MapContainerDynamic = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayerDynamic = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const MarkerDynamic = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const PopupDynamic = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

const MapSection: React.FC = () => {
  return (
    <MapWrapper>
      <MapContainerDynamic
        center={[20, 0]}
        zoom={2}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayerDynamic url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MarkerDynamic position={[51.505, -0.09]}>
          <PopupDynamic>¡Visité este lugar!</PopupDynamic>
        </MarkerDynamic>
        <MarkerDynamic position={[-0.7386384, -90.3339247]}>
          <PopupDynamic>¡El mejor lugar natural!</PopupDynamic>
        </MarkerDynamic>
        <MarkerDynamic position={[37.5644178, 126.6444898]}>
          <PopupDynamic>¡Comida increible!</PopupDynamic>
        </MarkerDynamic>
        <MarkerDynamic position={[1.3139783, 103.5145829]}>
          <PopupDynamic>¡La mejor ciudad del mundo!</PopupDynamic>
        </MarkerDynamic>
        <MarkerDynamic position={[19.3906594, -99.3084255]}>
          <PopupDynamic>¡Tacos e historia!</PopupDynamic>
        </MarkerDynamic>
      </MapContainerDynamic>
    </MapWrapper>
  );
};
//19.3906594,-99.3084255
const MapWrapper = styled.section`
  height: 500px;
  margin: 2rem 2rem;
`;

export default MapSection;
