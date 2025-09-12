import ReactMapGL, { Marker } from "react-map-gl/mapbox";
import { Pin } from "./Pin";

const Map = (props: any) => {
  return (
    <ReactMapGL
      {...props}
      width="100%"
      height="100%"
      mapboxAccessToken="pk.eyJ1IjoicG9qbnRmeCIsImEiOiJjbWZnb25lNjYwMzBtMmxwdDloanpkaTZ5In0.aG9eHAQc1ZSixnwpJKhNfQ"
      mapStyle="mapbox://styles/mapbox/streets-v9"
      initialViewState={{
        latitude: 48.50468,
        longitude: 8.363728,
        zoom: 15,
      }}
    >
      <Marker latitude={48.50468} longitude={8.363728}>
        <Pin />
      </Marker>
    </ReactMapGL>
  );
};

export default Map;
