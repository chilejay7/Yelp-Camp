import { useRef, createElement } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow
} from '@vis.gl/react-google-maps';

export default function GoogleMap({ title, latitude, longitude, location = "Woodland Park, CO" }) {
    const position = { lat: 39.6623872, lng: -104.93952 };
    const apiKey = import.meta.env.VITE_MAP_KEY;
    const mapId = import.meta.env.VITE_MAP_ID;

    return (
        <APIProvider apiKey={apiKey}>
            <div id="google-map">
                <Map zoom={9} center={position} style={{ height: "50vh" }}></Map>
                <AdvancedMarker position={position} mapId={mapId}></AdvancedMarker>
            </div>
        </APIProvider>
    );
}
