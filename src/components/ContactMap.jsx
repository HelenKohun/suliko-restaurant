import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useTranslation } from "react-i18next";

const position = [52.190146, 21.031355];

const sulikoIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width: 44px;
      height: 44px;
      background: #270c01;
      color: #b8935a;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Georgia, serif;
      font-size: 24px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.25);
      border: 1px solid rgba(184,147,90,0.7);
    ">
      S
    </div>
  `,
  iconSize: [44, 44],
  iconAnchor: [22, 22],
});

export default function ContactMap() {
  const { t } = useTranslation();
  return (
    <MapContainer
      role="region"
      aria-label={t("aria-labels.contactMap")}
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      zoomControl={false}
      className="h-[360px] w-full lg:h-[460px]"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position} icon={sulikoIcon}>
        <Popup>
          Suliko <br />
          ul. Mokotowska 85, Warszawa
        </Popup>
      </Marker>
    </MapContainer>
  );
}
