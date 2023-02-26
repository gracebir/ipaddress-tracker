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
            <CarditemInfo>192.212.174.101</CarditemInfo>
        </CardItem>
        <Hr />
        <CardItem>
            <CarditemHead>location</CarditemHead>
            <CarditemInfo>Brooklyn, NY 1001</CarditemInfo>
        </CardItem>
        <Hr />
        <CardItem>
            <CarditemHead>timezone</CarditemHead>
            <CarditemInfo>UTC-05:00</CarditemInfo>
        </CardItem>
        <Hr />
        <CardItem>
            <CarditemHead>isp</CarditemHead>
            <CarditemInfo>SpaceX Startlink</CarditemInfo>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}

export default Card
