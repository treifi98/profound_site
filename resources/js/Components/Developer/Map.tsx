import React, { useEffect } from 'react'

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1IjoidHJldmk5OCIsImEiOiJjbDNwcWhyOWgwMnppM2twN3JicG5wMmY2In0.m_eFeF9ZP_4xkJA9e5N05Q';
const Map = () => {
    useEffect(() => {
        // Initialize map
        const map = new mapboxgl.Map({
          container: 'map-container',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [55.2708, 25.2048], // Dubai coordinates
          zoom: 10,
        });

        // Clean up on component unmount
        return () => map.remove();
      }, []);

      return <div id="map-container" style={{ width: '100%', height: '400px' }} />;
}

export default Map
