import React, { useEffect, useState } from "react";
import TextField from "./components/TextField/TextField";
import styled from "styled-components";
import Card from "./components/Card/Card";
import { geoDataType, geoDataResponse } from "./axios";
import Map from "./components/Map/Map";

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

function App() {
  const [textField, setTextField] = useState("")
  const [datas, setDatas] = useState<geoDataType>();
  const [ip, setIp ] = useState("")
  const handleSubmit = async () => {
    setIp(textField)
    setDatas(await geoDataResponse(ip))
    console.log("handle")
  }

  useEffect(()=> {
    const getData = async () => {
      setDatas(await geoDataResponse(ip))
    }
    getData()
    console.log("render")
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
     <Map mapData={datas}/>
    </AppStyled>
  );
}

export default App;
