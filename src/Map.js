import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

import "./MapStyles.css";

mapboxgl.accessToken = "pk.eyJ1Ijoia3J1c2hpdGEzMDEwIiwiYSI6ImNrb3NmOTBjYjAwdHoyd28ycWs5dTkxczAifQ.j_JE2dJuhMAwDQA4FAjoOg";

const Map = () => {

  const mapContainerRef = useRef(null);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [zoom, setZoom] = useState(5);


navigator.geolocation.getCurrentPosition(successPosition, errorPosition, {
    enableHighAccuracy: true,
  });

    function successPosition(position) {
    setLongitude(position.coords.longitude)
        setLatitude(position.coords.latitude)
        console.log("got current location")
  }
  
  function errorPosition() {
    setLongitude(12.9716)
    setLatitude(77.5946)
  }

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [longitude, latitude],
            zoom: zoom,
        });

        map.addControl(new mapboxgl.NavigationControl(), "top-right");

        map.on("move", () => {
            setLongitude(map.getCenter().longitude);
            setLatitude(map.getCenter().latitude);
            setZoom(map.getZoom().toFixed(2));
        });
  //       const directions = new MapboxDirections({
  // accessToken: mapboxgl.accessToken,
  // unit: 'metric',
  // profile: 'mapbox/cycling'
  //       });
        
  //       map.addControl(directions, 'top-left');



    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  

  return (
      <div>
      <div className="map__container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;