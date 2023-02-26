import styled from "styled-components";

export const TextFiledWrapper = styled.div`
    display: flex;
    width: 80%;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 10px;
    @media (min-width: 57rem) {
        max-width: 50%;
        margin: 0 auto;
    }
`

export const TextFieldInput = styled.input`
    padding: 1rem 1.5rem;
    font-size: .8rem;
    outline: none;
    border: none;
    font-family: 'Rubik', sans-serif;
    border-radius: 10px 0 0 10px;
    width: 100%;
    @media (min-width: 57rem) {
       font-size: 1rem;
    }
`

export const TextFieldButton = styled.div`
    background-color: var(--color-very-dark-gray);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 10px 10px 0;
    color: #fff;
    width: 25%;
    cursor: pointer;
    @media (min-width: 57rem) {
        width: 15%;
    }
`