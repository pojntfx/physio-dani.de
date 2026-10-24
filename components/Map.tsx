import { setWorkerUrl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Map as MapGL, Marker } from "react-map-gl/maplibre";
import { Pin } from "./Pin";

setWorkerUrl(
  new URL("maplibre-gl/dist/maplibre-gl-worker.mjs", import.meta.url).toString(),
);

const Map = (props: any) => {
  return (
    <MapGL
      {...props}
      style={{ width: "100%", height: "100%" }}
      mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
      initialViewState={{
        latitude: 48.50468,
        longitude: 8.363728,
        zoom: 15,
      }}
    >
      <Marker latitude={48.50468} longitude={8.363728} anchor="bottom">
        <Pin />
      </Marker>
    </MapGL>
  );
};

export default Map;
