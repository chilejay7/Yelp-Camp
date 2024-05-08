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
    const mapId = import.meta.env.VITE_MAP_IDNUM;
    const markerImg = "./images/camping-tent.png";

    return (
        <APIProvider apiKey={apiKey}>
            <div id="google-map">
                <Map defaultZoom={12} defaultCenter={position} style={{ height: "50vh" }} mapId={mapId}></Map>
                <AdvancedMarker position={position} >
                    <img src={markerImg} width={32} height={32}></img>
                </AdvancedMarker>
            </div>
        </APIProvider>
    );
}
