import React, { useState } from "react";
import TextField from "./components/TextField/TextField";
import styled from "styled-components";
import Card from "./components/Card/Card";
import { MapContainer as Map, Popup, TileLayer, Marker } from "react-leaflet";
import { geoDataType, geoDataResponse } from "./axios";

const AppStyled = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
`;

const BannerStyled = styled.div`
  background-image: url("https://res.cloudinary.com/dnzidlufh/image/upload/v1677255150/pattern-bg-mobile_bkkaha.png");
  content: "";
  background-position: 100%;
  height: 40vh;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: contain;
  @media (min-width: 45rem) {
    background-image: url("https://res.cloudinary.com/dnzidlufh/image/upload/v1677255071/pattern-bg-desktop_ildpfn.png");
    width: 100%;
    background-position: 100% 100%;
    height: 25vh;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
  }
`;
const Container = styled.div`
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 45rem) {
    gap: 2.3rem;
  }
`;
const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 45rem) {
    gap: 1.5rem;
  }
`;

const HeadText = styled.h2`
  text-align: center;
  font-weight: 700;
  color: #fff;
`;

const MapContainer = styled.div`
  height: 60vh;
  width: 100%;
  background-color: #0303;
  @media (min-width: 45rem) {
    height: 75vh;
  }
`;

function App() {
  const [textField, setTextField] = useState("")
  const [datas, setDatas] = useState<geoDataType>();
  const handleSubmit = async () => {
    setDatas(await geoDataResponse(textField))
  }
  return (
    <AppStyled>
      <BannerStyled>
        <Container>
          <UpperContainer>
            <HeadText>IP Address Tracker</HeadText>
            <TextField textField={textField} setTextField={setTextField} handleSubmit={handleSubmit}/>
          </UpperContainer>
          <Card cardData={datas!}/>
        </Container>
      </BannerStyled>
      <MapContainer>
        <Map center={[-1.970579, 30.104429]} zoom={12}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-1.953246, 30.092850]}>
            <Popup>
              Kigali height <br /> the build.
            </Popup>
          </Marker>
        </Map>
      </MapContainer>
    </AppStyled>
  );
}

export default App;
