import React, { useEffect, useRef, useState } from 'react'

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import dubai from '../../../assets/dubai.png'

mapboxgl.accessToken = 'pk.eyJ1IjoidHJldmk5OCIsImEiOiJjbDNwcWhyOWgwMnppM2twN3JicG5wMmY2In0.m_eFeF9ZP_4xkJA9e5N05Q';
// import './'
interface Props{
    points:{point:number[],bg:string}[],
    changes?:number
    rchanges?:number
    zoom?:number
    isZoom?:boolean
}
const Map = (props:Props) => {


    const createDivMarker = (color, imageUrl, title, description) => {
        const rootEl = document.createElement('div');
        rootEl.style.position = 'relative'; // added to allow new div to be positioned
        rootEl.style.height = 'max-content';
        rootEl.style.width = 'max-content';
        const el = document.createElement('div');
        el.style.backgroundColor = color;
        el.style.width = '115.767px';
        el.style.height = '40px';
        el.style.padding = '10px';
        el.style.borderRadius = '8px';
        el.style.position = 'relative'; // added to allow new div to be positioned
        el.style.zIndex = '99999';
        el.innerText = 'AED 1,500,000'  // added to allow new div to be positioned
        el.style.display = 'flex'  // added to allow new div to be positioned
        el.style.justifyContent = 'center'  // added to allow new div to be positioned
        el.style.fontSize = '14px'  // added to allow new div to be positioned
        // const el1 = document.createElement('div');
        // el1.style.backgroundColor = color;
        // el1.style.width = '113.767px';
        // el1.style.height = '40px';
        // el1.style.padding = '10px';
        // el1.style.borderRadius = '8px';
        // el1.style.position = 'relative'; // added to allow new div to be positioned
        rootEl.appendChild(el);
        const tri = document.createElement('div');
        tri.style.width = '15px';
        tri.style.height = '15px';
        tri.style.position = 'absolute';
        tri.style.bottom = '-9px';
        tri.style.left = '52.2835px';
        tri.style.rotate = '45deg';
        tri.style.zIndex = '9999';
        tri.style.backgroundColor = 'white';
        rootEl.appendChild(tri);

        // Create and append image
        // const img = document.createElement('img');
        // img.src = imageUrl;
        // img.style.width = '100%';
        // img.style.height = 'auto';
        // img.onclick = () => { // image click event
        //     const newDiv = document.createElement('div');
        //     newDiv.textContent = 'New Div'; // Text for the new div
        //     newDiv.style.backgroundColor = 'lightblue'; // Background color for the new div
        //     newDiv.style.position = 'absolute'; // position new div over parent div
        //     newDiv.style.top = '0'; // new div starting point from top
        //     newDiv.style.left = '0'; // new div starting point from left
        //     el.insertBefore(newDiv, el.firstChild); // insert the new div before the first child of parent div
        // };
        // el.appendChild(img);

        // // Create and append title
        // const titleElement = document.createElement('div');
        // titleElement.textContent = title;
        // titleElement.style.fontSize = '18px';
        // titleElement.style.fontWeight = 'bold';
        // el.appendChild(titleElement);

        // // Create and append description
        // const descElement = document.createElement('div');
        // descElement.textContent = description;
        // descElement.style.fontSize = '14px';
        // el.appendChild(descElement);

        return rootEl;
    };



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
          scrollZoom:props.isZoom,

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
                        const el = createDivMarker('white', dubai, 'Title', 'Description');

                        new mapboxgl.Marker(el)
                            .setLngLat([point.point[0],point.point[1]])
                            .addTo(mapRef);
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
