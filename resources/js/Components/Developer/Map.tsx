import React, { useEffect } from 'react'

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1IjoidHJldmk5OCIsImEiOiJjbDNwcWhyOWgwMnppM2twN3JicG5wMmY2In0.m_eFeF9ZP_4xkJA9e5N05Q';
// import './'
const Map = () => {
    const clearLogo = () => {
        document.querySelector('.mapboxgl-ctrl-logo').style.display='none'
    }
    useEffect(() => {
        // Initialize map
        const map = new mapboxgl.Map({

          container: 'map-container',
          style: 'mapbox://styles/trevi98/cli19khgh02g701qy1jsmb8wr',
          center: [55.2744, 25.2048], // Dubai coordinates
          zoom: 10,
          maxZoom:18,
          minZoom:9,
          logoPosition:'top-left',
          attributionControl: false,

        })
        map.on('load', () => {
          // Add the custom CSS class to the water layer
            map.setPaintProperty('water-shadow', 'fill-color', ['get', 'color']);
            map.setPaintProperty('water-shadow', 'fill-opacity', 0);
            map.setPaintProperty('water-shadow', 'fill-shadow-color', '#002D31');
            map.setPaintProperty('water-shadow', 'fill-shadow-blur', 7.69967);
            map.setPaintProperty('water-shadow', 'fill-shadow-offset', [6.22424, 6.22424]);
            // map.addLayer({
            //     id: 'water-shadow',
            //     type: 'fill',
            //     // source: 'your-source-id',
            //     // 'source-layer': 'your-source-layer',
            //     paint: {
            //       'fill-color': 'rgba(255, 0, 0, 1)', // Semi-transparent black color
            //     },
            //     filter: ['==', 'layer-type', 'water'], // Apply the shadow effect to the water layer only
            //   });

              // Adjust the layer order to ensure the shadow layer is below the water layer
              map.moveLayer('water-shadow', 'water');
        });
        map.on('render', () => {
            clearLogo();

        });
        map.on('load', function() {
            map.removeLayer('poi-label');
            // map.removeSource('poi');
            map.addLayer({
                "id": "points",
                "type": "circle",
                "paint": {
                  "circle-radius": 20,
                  "circle-color": '#f00'
                },
                "source": {
                  "type": "geojson",
                  "data": {
                    "type": "FeatureCollection",
                    "features": [{
                      "type": "Feature",
                      "properties": {
                        "field": 1
                      },
                      "geometry": {
                        "type": "Point",
                        "coordinates": [55.2744, 25.2048]
                      }
                    }]
                  }
                }
              });
            map.addLayer({
                "id": "points1",
                "type": "circle",
                "paint": {
                  "circle-radius": 20,
                  "circle-color": '#f09'
                },
                "source": {
                  "type": "geojson",
                  "data": {
                    "type": "FeatureCollection",
                    "features": [{
                      "type": "Feature",
                      "properties": {
                        "field": 1
                      },
                      "geometry": {
                        "type": "Point",
                        "coordinates": [55.2744, 25.2148]
                      }
                    }]
                  }
                }
              });
          });
          map.on('mousemove', 'points', (event) => {
            map.getCanvas().style.cursor = 'pointer';
            console.log(event.features[0])
            map.setPaintProperty('points', 'circle-color', '#000');
            // console.log(event.features[0].style = "#fff" )
            // console.log(event.features[0].layer.paint['circle-color'].g = 'f' )
            // console.log(event.features[0].layer.paint['circle-color'].b = 'f' )

            // // Set constants equal to the current feature's magnitude, location, and time
            // const quakeMagnitude = event.features[0].properties.mag;
            // const quakeLocation = event.features[0].properties.place;
            // const quakeDate = new Date(event.features[0].properties.time);

            // // Check whether features exist
            // if (event.features.length === 0) return;
            // // Display the magnitude, location, and time in the sidebar
            // magDisplay.textContent = quakeMagnitude;
            // locDisplay.textContent = quakeLocation;
            // dateDisplay.textContent = quakeDate;

            // // If quakeID for the hovered feature is not null,
            // // use removeFeatureState to reset to the default behavior
            // if (quakeID) {
            //   map.removeFeatureState({
            //     source: 'earthquakes',
            //     id: quakeID
            //   });
            // alert("s")
            })


        // Clean up on component unmount
        return () => map.remove();
      }, []);

      return <div id="map-container" style={{ width: '100%', height: '100%' }} />;
}

export default Map
