import React from 'react'
import { TextFieldButton, TextFieldInput, TextFiledWrapper } from './textStyled'
import { FiChevronRight } from 'react-icons/fi'

function TextField() {
  return (
    <TextFiledWrapper>
      <TextFieldInput type="text" placeholder='Search for any IP address or domain'/>
      <TextFieldButton>
        <FiChevronRight/>
      </TextFieldButton>
    </TextFiledWrapper>
  )
}

export default TextField
