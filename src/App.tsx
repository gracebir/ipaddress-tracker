import React from 'react';
import TextField from './components/TextField/TextField';
import styled from 'styled-components';
// desktop image path https://res.cloudinary.com/dnzidlufh/image/upload/v1677255071/pattern-bg-desktop_ildpfn.png

// mobile image https://res.cloudinary.com/dnzidlufh/image/upload/v1677255150/pattern-bg-mobile_bkkaha.png

const AppStyled = styled.div`
  background-color: #F5f5f5;
  width: 100%;
  height: 100vh;
`

const BannerStyled = styled.div`
  background-image: url('https://res.cloudinary.com/dnzidlufh/image/upload/v1677255150/pattern-bg-mobile_bkkaha.png');
  content: '';
  background-position: 100%;
  height: 40vh;
  background-repeat: no-repeat;
`
const Container = styled.div`
  padding: 2rem 1.5rem;
`
const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const HeadText = styled.h2`
  text-align: center;
  font-weight: 700;
  color: #fff;
`


function App() {
  return (
    <AppStyled>
      <BannerStyled>
        <Container>
          <UpperContainer>
            <HeadText>IP Address Tracker</HeadText>
            <TextField/>
          </UpperContainer>
        </Container>
      </BannerStyled>
      
    </AppStyled>
  );
}

export default App;
