import styled from "styled-components";

export const PokemonPageListStyle = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #5E5E5E;;
    color: white;
    min-height: 100vh;
    width: 100%;
    position: absolute;
    top: 17rem;
`

export const PokemonListContainer = styled.div`
   /* display: grid; 
   grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr; */
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
`

export const TitleContainer = styled.div`
    width: 50rem;
    position: absolute;
    top: 3rem;
    left: 5rem;
`

export const TitleAllPokemons = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 7.2rem;
`