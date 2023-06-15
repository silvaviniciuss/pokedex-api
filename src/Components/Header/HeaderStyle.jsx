import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: absolute;
    width: 100%;
    height: 19vh;
    background-color: white;
`
export const PokemonLogoContainer = styled.div`
    background-color: white;
    position: absolute;
    left: 39%;
    right: 61%;
    top: 1.5rem;
`

export const PokemonLogoStyle = styled.img`
    width: 30.7rem;
    height: 11.3rem;
    background-color: white;
`

export const PokedexButtonContainer = styled.div`
    font-size: 22px;
    position: absolute;
    left: 80%;
    top: 4.1rem;
    background-color: white;
`

export const PokedexButton = styled.button`
    width: 28.7rem;
    height: 7.4rem;
    padding: 0.4rem 1rem;
    background-color: #33A4F5;
    color: white;
    border-radius: 0.8rem;
`

export const AllPokemons = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    position: absolute;
    top: 7.5rem;
    left: 3rem;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.6rem;
    text-decoration-line: underline;
    cursor: pointer;
`
