import * as React from "react";
import { useState } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import { Pin } from "./Pin";

const Map = (props: any) => {
  const [viewport, setViewport] = useState({
    latitude: 48.50468,
    longitude: 8.363728,
    zoom: 15,
  });

  return (
    <ReactMapGL
      {...props}
      {...viewport}
      width="100%"
      height="100%"
      mapboxApiAccessToken="pk.eyJ1IjoicG9qbnRmeCIsImEiOiJja2YxYWViMXExMnBjMnRvOHRjN2czeTRzIn0.7cFKEYAAJDLgF9XAm8G1NQ"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Marker latitude={48.50468} longitude={8.363728}>
        <Pin />
      </Marker>
    </ReactMapGL>
  );
};

export default Map;
