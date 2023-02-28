import React, { useEffect } from 'react'
import { MapContainer as MapWrapper, useMap, TileLayer } from "react-leaflet";
import { MarkerLayer, Marker } from 'react-leaflet-marker';
import { MapContainer } from './mapStyled';
import { popPosition } from '../../icons/icons';

export type position = {
  lat: number
  lng: number
}

type mapProps = {
  center: position
}

function Map({center}:mapProps) {
  const RePositionAutomatically = ({lat,lng}:position) => {
    const map = useMap();
     useEffect(() => {
       map.setView([lat, lng]);
       // eslint-disable-next-line 
     }, [center]);
     return null;
   }
  return (
    <MapContainer>
    <MapWrapper scrollWheelZoom={true} center={[center.lat, center.lng]} zoom={15}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerLayer>
        <Marker position={[center.lat, center.lng]}>
          {popPosition}
        </Marker>
      </MarkerLayer>
      <RePositionAutomatically lat={center.lat} lng={center.lng}/>
    </MapWrapper>
  </MapContainer>
  )
}

export default Map
