import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getCenter } from "geolib";

const MapComponent = ({ searchResults, hotels }) => {
  const [selected, setSelected] = useState({});

  const coordinates = hotels.map((result) => ({
    longitude: result.coordinate.lon,
    latitude: result.coordinate.lat,
  }));
  const center = getCenter(coordinates);

  return (
    <Map
      initialViewState={{
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 13,
      }}
      style={{ width: "100%", height: "30%" }}
      mapStyle="mapbox://styles/mickmaratta/cla1h3w8l000216lft1epnwbs"
      mapboxAccessToken={process.env.mapbox_key}
    >
      {hotels.map((result) => (
        <div key={result.id}>
          <Marker
            clickTolerance={30}
            onClick={() => setSelected(result)}
            longitude={result.coordinate.lon}
            latitude={result.coordinate.lat}
            color="#e47676"
          ></Marker>
          {selected.coordinate?.lon === result.coordinate.lon ? (
            <Popup
              latitude={result.coordinate.lat}
              longitude={result.coordinate.lon}
              anchor="bottom"
              offset={30}
              closeOnClick={false}
              onClose={() => setSelected({})}
            >
              <div className="flex-col justify-center items-center text-center rounded-lg">
                <p className="text-sm text-gray-800">{result.name}</p>
                <p className="text-xs text-gray-500">{result.ratePlan.price.current}/night</p>
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
