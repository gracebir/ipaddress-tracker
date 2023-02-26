import React from 'react'
import { MapContainer as MapWrapper, Popup, TileLayer, Marker } from "react-leaflet";
import { MapContainer } from './mapStyled';
import { geoDataType } from '../../axios'

type mapProp = {
  mapData: geoDataType
}

function Map({mapData}:mapProp) {
  return (
    <MapContainer>
    <MapWrapper attributionControl={false} center={[mapData?.location.lat!, mapData?.location.lng!]} zoom={15}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[mapData?.location.lat!, mapData?.location.lng!]}>
        <Popup>
          {mapData.location.region}
        </Popup>
      </Marker>
    </MapWrapper>
  </MapContainer>
  )
}

export default Map
