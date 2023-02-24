import styled from "styled-components";

export const TextFiledWrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    @media (min-width: 45rem) {
        max-width: 40%;
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
    @media (min-width: 45rem) {
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
    @media (min-width: 45rem) {
        width: 15%;
    }
`