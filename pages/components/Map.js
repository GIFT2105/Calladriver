import React from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2lmdGxldDIiLCJhIjoiY2xtb3B1bXl4MTl0NDJpbnk1aTA1eWxvZSJ9.qJgyb3RS8lPSd99c_7cDAg";

export default function Map({ pickup, dropoff }) {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      // style: "mapbox://styles/mapbox/satellite-v9",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [21.9910, -27.8252],
      zoom: 5,
    });

    if(pickup){
      addToMap(map,);
    }

    if(pickup, dropoff){
      map.fitBounds([
        dropoff || ["", ""],
        pickup || ["", ""]
      ],{
        padding: 60
      })
    }

     // eslint-disable-next-line
  }, [pickup, dropoff]);

  const addToMap = (map) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(pickup || ["", ""])
      .addTo(map);
    const marker2 = new mapboxgl.Marker()
      .setLngLat(dropoff || ["", ""])
      .addTo(map);
  };

 

  

  return <Wrapper id="map"></Wrapper>;
}

const Wrapper = tw.div`
  flex flex-col h-screen flex-1
`;
