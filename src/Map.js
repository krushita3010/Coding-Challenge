import { useEffect, useRef, useState } from "react";
import "./Map.css";

function Map() {
  const mapsRef = useRef();

  const [mapInitialized, setMapInitialized] = useState(false);

  useEffect(() => {
    if (window?.google == null) return;

    if (!mapInitialized) {
      console.log("inside init");
      initMap();
      setMapInitialized(true);
    }

    return () => {};
  }, [window.google, mapInitialized]);

  const initMap = () => {
    let directionService = new window.google.maps.DirectionsService();
    let directionRenderer = new window.google.maps.DirectionsRenderer();

    let map;

    map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 23.0774941, lng: 72.5935369 },
      zoom: 8,
    });

    directionRenderer.setMap(map);
    directionRenderer.setPanel(document.getElementById("directionPanel"));

    setTimeout(() => {
      calcDistance(directionService, directionRenderer);
    }, 2000);
  };

  const calcDistance = (directionsService, directionsRenderer) => {
    const start = "chicago, il";
    const end = "los angeles, ca";

    directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  };

  return (
    <div className="App">
      <div
        className="maps-container"
        id="map"
        ref={mapsRef}
        style={{
          float: "left",
          height: "100vh",
          width: "70vw",
          position: "relative",
        }}
      ></div>
      <div
        className="directions-container"
        id="directionPanel"
        style={{
          float: "right",
          height: "100vh",
          width: "30vw",
          position: "absolute",
        }}
      ></div>
    </div>
  );
}

export default Map;