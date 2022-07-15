import React, { useEffect } from "react";
import { useRef } from "react";
import { Icon, Marker } from "leaflet";
import { useMap } from "../../Hooks";
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from "../../const";
import "leaflet/dist/leaflet.css";

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export function Map({ city, points, selectedPoint }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
            selectedPoint !== "" && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <div style={{ height: "500px" }} ref={mapRef}></div>;
}
