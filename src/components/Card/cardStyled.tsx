import styled from 'styled-components'

export const CardContainer = styled.div`
    background-color: #fff;
    width: 80%;
    z-index: 999;
    min-height: 30vh;
    padding: 1rem 2rem;
    margin: 0 auto;
    border-radius: 10px;
    display: flex;
    align-items: center;
    @media (min-width: 60rem) {
        width: 60%;
        min-height: 15vh;
    }
`

export const CardBody = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    @media (min-width: 80rem) {
        gap: 3rem;
        flex-direction: row;
    }
`

export const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    @media (min-width:80rem) {
        gap: 1rem;
        align-items: flex-start;
    }
`

export const Hr = styled.hr`
    display: none;
    @media (min-width: 80rem) {
        display: block;
    }
`

export const CarditemHead = styled.span`
    color: var(--color-dark-gray);
    font-size: .7rem;
    text-transform: uppercase;
    font-weight: 700;
    @media (min-width: 57rem) {
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 700;
    }
`

export const CarditemInfo = styled.span`
    color: var(--color-very-dark-gray);
    font-size: 1rem;
    font-weight: 500;
    @media (min-width: 80rem) {
        font-size: 1.7rem;
        font-weight: 500;
    }
`