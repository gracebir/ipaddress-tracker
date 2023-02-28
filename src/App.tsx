import React, { useEffect, useState } from "react";
import TextField from "./components/TextField/TextField";
import styled from "styled-components";
import Card from "./components/Card/Card";
import { geoDataType, geoDataResponse, geoPosition } from "./axios";
import Map, { position } from "./components/Map/Map";

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
    height: 35vh;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
  }
`;
const Container = styled.div`
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 37rem) {
    gap: 3rem;
  }
`;
const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 57rem) {
    gap: 1.5rem;
  }
`;

const HeadText = styled.h2`
  text-align: center;
  font-weight: 700;
  color: #fff;
  font-size: 1.5rem;
  @media (min-width: 37rem) {
    font-size: 2.7rem;
  }
`;

function App() {
  const [textField, setTextField] = useState("")
  const [datas, setDatas] = useState<geoDataType>();
  const [center, setCenter] = useState<position>({lat: 0, lng:0})
  const [ip, setIp ] = useState("")
  const handleSubmit = async () => {
    setIp(textField)
    setDatas(await geoDataResponse(ip))
    setCenter(await geoPosition(ip))
  }

  async function findMe(){
  setCenter(await geoPosition(ip))
}

  useEffect(()=> {
    const getData = async () => {
      setDatas(await geoDataResponse(ip))
    }
    getData()
    findMe()
    // eslint-disable-next-line
  },[ip])
  if(!datas) return <div>Loading...</div>
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
     <Map center={center}/>
    </AppStyled>
  );
}

export default App;
