import React, { useEffect, useRef, useState } from 'react'

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import dubai from '../../../assets/dubai.png'
import { title } from 'process';

mapboxgl.accessToken = 'pk.eyJ1IjoidHJldmk5OCIsImEiOiJjbDNwcWhyOWgwMnppM2twN3JicG5wMmY2In0.m_eFeF9ZP_4xkJA9e5N05Q';
// import './'
interface Props{
    points:{point:number[],bg:string}[],
    changes?:number
    rchanges?:number
    zoom?:number
    isZoom?:boolean,
    // refs?:any
}
const MapListing = (props:Props) => {
    // useEffect(()=>{
    //     console.log('sssssss')
    //     console.log (props.refs)
    // },[props.refs])


    const createDivMarker = (color, imageUrl, title, description,index) => {
        const rootEl = document.createElement('div');
        // rootEl.style.position = 'relative'; // added to allow new div to be positioned
        rootEl.style.height = 'max-content';
        rootEl.onclick = () => {
            document.querySelectorAll('.removable-el').forEach((elmnt) => {
                elmnt.remove()
            })
            const newDiv = document.createElement('div');
                newDiv.style.backgroundColor = 'white'; // Background color for the new div
                newDiv.style.borderRadius = '8px'; // Background color for the new div
                newDiv.style.position = 'absolute'; // position new div over parent div
                newDiv.style.top = '-387px'; // new div starting point from top
                newDiv.style.width = '320px'; // new div starting point from top
                newDiv.style.minHeight = '377px'; // new div starting point from top
                newDiv.style.left = '-102.12px'; // new div starting point from left
                newDiv.style.overflow = 'hidden'; // new div starting point from left
                newDiv.classList.add('removable-el') // new div starting point from left
                newDiv.style.boxShadow = '0 2px 7px 1px #0000004d'
                rootEl.insertBefore(newDiv, rootEl.firstChild); // insert the new div before the first child of parent div
            const closeelmnt = document.createElement('div')
                closeelmnt.style.width = '16px'
                closeelmnt.style.height = '16px'
                closeelmnt.style.position = 'absolute'
                closeelmnt.style.top = '0px'
                closeelmnt.style.right = '0px'
                closeelmnt.style.display = 'flex'
                closeelmnt.style.backgroundColor = '#ff000099'
                closeelmnt.style.opacity = '1'
                closeelmnt.textContent = 'x'
                closeelmnt.style.justifyContent = 'center'
                closeelmnt.style.alignItems = 'center'
                closeelmnt.style.color = 'white'
                closeelmnt.onclick = (e) => {
                    // alert(e.target)
                    e.stopPropagation();
                    e.target.parentElement.remove()
                    // document.querySelectorAll('.removable-el').forEach((elmnt) => {
                    //     elmnt.remove()
                    // })
                }

                newDiv.appendChild(closeelmnt)

            const imgEl = document.createElement('img');
                imgEl.src = dubai
                imgEl.style.width = '100%';
                imgEl.style.height = '213px';
                imgEl.style.borderRadius = '8px 8px 0px 0px';
                newDiv.appendChild(imgEl)
            const cont = document.createElement('div');
            cont.style.width = "100%"
            cont.style.height = "calc(100% - 213px)"
            // cont.style.backgroundColor = "red"
            cont.style.padding = "30px 24px"
            newDiv.appendChild(cont)

            const title = document.createElement('div')
                title.innerText = "Creek Rise tower 2 west side Creek Rise tower"
                title.style.color = "#002D31"
                title.style.lineHeight = "28px"
                title.style.fontSize = '18px'
                title.style.fontWeight = '600'
                cont.appendChild(title)


            const pricetit = document.createElement('div')
                pricetit.innerText = "AED 100,150,000"
                pricetit.style.color = "#9e9e9e"
                pricetit.style.fontSize = '14px'
                pricetit.style.fontWeight = '400'
                pricetit.style.marginTop = '6px'
                cont.appendChild(pricetit)
            const areatit = document.createElement('div')
                areatit.innerText = "Dubai Creek Harbor"
                areatit.style.marginTop = "6px"
                areatit.style.color = "#9e9e9e"
                areatit.style.fontSize = '14px'
                areatit.style.fontWeight = '400'
                cont.appendChild(areatit)

        }
        rootEl.id = `id${index}`;
        rootEl.style.width = 'max-content';
        rootEl.onmouseenter = () => {
            // alert('s')
            document.querySelector(`#elmnt${index}`).style.scale = '1.03'
        }
        rootEl.onmouseleave = () => {
            // alert('s')
            document.querySelector(`#elmnt${index}`).style.scale = '1'
        }
        const mainCont = document.createElement('div')
            // mainCont.style.width = '100%'
            mainCont.style.boxShadow = '0 2px 7px 1px #0000004d'
            mainCont.style.borderRadius = '8px';

            rootEl.appendChild(mainCont)

        const el = document.createElement('div');
        el.style.backgroundColor = color;
        el.id = `iddiv${index}`;
        el.style.width = '115.767px';
        el.style.transition = 'all';
        el.style.minHeight = '40px';
        el.style.padding = '10px';
        el.style.borderRadius = '8px';
        el.style.position = 'relative'; // added to allow new div to be positioned
        el.style.zIndex = '99999';
        el.innerText = 'AED 100,500,000'  // added to allow new div to be positioned
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
        mainCont.appendChild(el);
        const tri = document.createElement('div');
        tri.id = `idtri${index}`;
        tri.style.width = '15px';
        tri.style.height = '15px';
        tri.style.position = 'absolute';
        tri.style.bottom = '-7px';
        tri.style.left = '52.2835px';
        tri.style.rotate = '45deg';

        tri.style.zIndex = '9999';
        tri.style.backgroundColor = 'white';
        mainCont.appendChild(tri);

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
                        const el = createDivMarker('white', dubai, 'Title', 'Description',counter);

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
            // mapRef.setPaintProperty(`points${props.changes}`, 'circle-color', '#fff');
            console.log(`changes ${props.changes}`)
            try{

                document.querySelector(`#iddiv${props.changes}`).style.backgroundColor = '#002D31';
                document.querySelector(`#idtri${props.changes}`).style.backgroundColor = '#002D31';
                document.querySelector(`#iddiv${props.changes}`).style.color = 'white';
                document.querySelector(`#iddiv${props.rchanges}`).style.backgroundColor = '#fff';
                document.querySelector(`#idtri${props.rchanges}`).style.backgroundColor = '#fff';
                document.querySelector(`#iddiv${props.rchanges}`).style.color = '#002D31';
            }catch(e){

            }
        }

    },[props.changes])
    // useEffect(() => {
    //     if(loaded){
    //         // alert(props.changes)
    //         // mapRef.setPaintProperty(`points${props.rchanges}`, 'circle-color', '#002d31');
    //         console.log(`Rchanges ${props.rchanges}`)
    //         try{

    //             document.querySelector(`#iddiv${props.rchanges}`).style.backgroundColor = 'white';
    //             document.querySelector(`#idtri${props.rchanges}`).style.backgroundColor = 'white';
    //             document.querySelector(`#iddiv${props.rchanges}`).style.color = '#002D31';
    //         }
    //         catch(e){

    //         }
    //     }

    // },[props.rchanges])
    useEffect(() => {
        if(loaded){
            mapRef.setZoom(props.zoom);
            // alert(props.changes)
            // mapRef.setPaintProperty(`points${props.rchanges}`, 'circle-color', '#002d31');
        }

      },[props.zoom])


      return <div id="map-container" style={{ width: '100%', height: '100%' }} />;
}

export default MapListing
