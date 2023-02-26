import React from 'react'
import { TextFieldButton, TextFieldInput, TextFiledWrapper } from './textStyled'
import { FiChevronRight } from 'react-icons/fi'

type textFieldProps = {
  textField: string
  setTextField: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: () => void
}

function TextField({textField, setTextField, handleSubmit}:textFieldProps) {
  return (
    <TextFiledWrapper>
      <TextFieldInput value={textField} onChange={(e)=> setTextField(e.target.value)} type="text" placeholder='Search for any IP address or domain'/>
      <TextFieldButton onClick={handleSubmit}>
        <FiChevronRight size={30}/>
      </TextFieldButton>
    </TextFiledWrapper>
  )
}

export default TextField
