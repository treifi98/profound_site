import React, { useEffect, useRef, useState } from 'react'

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1IjoidHJldmk5OCIsImEiOiJjbDNwcWhyOWgwMnppM2twN3JicG5wMmY2In0.m_eFeF9ZP_4xkJA9e5N05Q';
// import './'
interface Props{
    points:{point:number[],bg:string}[],
    changes:number
    rchanges:number
    zoom:number
}
const Map = (props:Props) => {
    // const [changes,setChanges] = useState(props.changes)
    const [mapRef,SetMapRef] = useState(null)
    const [loaded,SetLoaded] = useState(false)

    const clearLogo = () => {
        try{

            document.querySelector('.mapboxgl-ctrl-logo').style.display='none'
        }catch(err){

        }
    }
    useEffect(() => {
        SetMapRef (new mapboxgl.Map({

          container: 'map-container',
          style: 'mapbox://styles/trevi98/cli19khgh02g701qy1jsmb8wr',
          center: [55.2744, 25.2048], // Dubai coordinates
          zoom: 14,
          maxZoom:18,
          minZoom:10,
          logoPosition:'top-left',
          attributionControl: false,
          scrollZoom:false,

        }))
        // SetMapRef(map)

        // Initialize map


      }, []);
      useEffect(()=>{
        if(loaded){

            mapRef.on('load', () => {
                //   // Add the custom CSS class to the water layer
                    let counter = 0
                    props.points.forEach((point) => {
                        // alert(point.point)
                        // alert(counter)
                        mapRef.addLayer({
                        "id": `points${counter}`,
                        "type": "circle",
                        "paint": {
                        "circle-radius": 6,
                        "circle-color": point.bg
                        },
                        "source": {
                        "type": "geojson",
                        "data": {
                            "type": "FeatureCollection",
                            "features": [{
                            "type": 'Feature',
                            "properties": {
                                "field": 1
                            },
                            "geometry": {
                                "type": 'Point',
                                "coordinates": point.point
                            }
                            }]
                        }
                        }
                        });
                        counter++
                    })

                });
                mapRef.on('render', () => {
                    clearLogo();

                });


                // Clean up on component unmount
                return () => mapRef.remove();
        }
        else{
            SetLoaded(true)
        }
      },[mapRef])
      useEffect(() => {
        if(loaded){
            // alert(props.changes)
            mapRef.setPaintProperty(`points${props.changes}`, 'circle-color', '#fff');
        }

    },[props.changes])
    useEffect(() => {
        if(loaded){
            // alert(props.changes)
            mapRef.setPaintProperty(`points${props.rchanges}`, 'circle-color', '#002d31');
        }

    },[props.rchanges])
    useEffect(() => {
        if(loaded){
            mapRef.setZoom(props.zoom);
            // alert(props.changes)
            // mapRef.setPaintProperty(`points${props.rchanges}`, 'circle-color', '#002d31');
        }

      },[props.zoom])


      return <div id="map-container" style={{ width: '100%', height: '100%' }} />;
}

export default Map
