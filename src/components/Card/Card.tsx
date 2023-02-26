import React from 'react'
import { CardBody, CardContainer, CardItem, CarditemHead, CarditemInfo, Hr } from './cardStyled'
import { geoDataType } from '../../axios'
type cardProp = {
  cardData: geoDataType
}

function Card({cardData}: cardProp) {
  return (
    <CardContainer>
      <CardBody>
        <CardItem>
            <CarditemHead>ip address</CarditemHead>
            <CarditemInfo>{cardData.ip}</CarditemInfo>
        </CardItem>
        <Hr />
        <CardItem>
            <CarditemHead>location</CarditemHead>
            <CarditemInfo>{`${cardData.location.city}, ${cardData.location.country}`}</CarditemInfo>
        </CardItem>
        <Hr />
        <CardItem>
            <CarditemHead>timezone</CarditemHead>
            <CarditemInfo>UTC{cardData.location.timezone}</CarditemInfo>
        </CardItem>
        <Hr />
        <CardItem>
            <CarditemHead>isp</CarditemHead>
            <CarditemInfo>{cardData.isp}</CarditemInfo>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}

export default Card
