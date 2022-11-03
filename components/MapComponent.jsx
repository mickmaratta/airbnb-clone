import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getCenter } from "geolib";

const MapComponent = ({ searchResults }) => {
  const [selected, setSelected] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  console.log(selected);
  const center = getCenter(coordinates);

  return (
    <Map
      initialViewState={{
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 10,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mickmaratta/cla0fxio0000w15p78v1k5aks"
      mapboxAccessToken={process.env.mapbox_key}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            clickTolerance={30}
            onClick={() => setSelected(result)}
            longitude={result.long}
            latitude={result.lat}
            color="#Fd5B61"
          ></Marker>
          {selected.long === result.long ? (
            <Popup
              latitude={result.lat}
              longitude={
                result.long}
              anchor="bottom"
              offset={30}
              closeOnClick={false}
              onClose={() => setSelected({})}
            >
              <div>
                <p className="text-sm text-gray-500">{result.title}</p>
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
};

export default MapComponent;
