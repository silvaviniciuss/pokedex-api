import styled from "styled-components";

export const PokemonDetailPageStyle = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #5E5E5E;;
    color: white;
    height: 88.4rem;
    width: 100%;
    position: absolute;
    top:17rem;
  
`

export const TitleDetailContainer = styled.div`
    width: 500px;
    position: absolute;
    top: 3rem;
    left: 5rem;
`

export const TitleDetail = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 7.2rem;
`

export const PokemonDetailContainer = styled.section`
    position: relative;
    width: 138.9rem;
    height: 66.3rem;
  
    left: 20rem;
    right: 20rem;
    top: 14.8rem;
    background-color: ${({ color }) => color};
    border-radius: 3.7rem;
`

export const PokemonFrontImage = styled.div`
    position: absolute;
    width: 28.2rem;
    height: 28.2rem;
    left: 4.4rem;
    top: 2.6rem;
    background-color: white;
    border: .2rem solid #FFFFFF;
    border-radius: .8rem;
    img {
        width: 100%;
        height: 100%;
    }
`
export const PokemonBackImage = styled.div`
    position: absolute;
    width: 28.2rem;
    height: 28.2rem;
    left: 4.4rem;
    top: 35.5rem;
    background-color: white;
    border: .2rem solid #FFFFFF;
    border-radius: .8rem;
    img {
        width: 100%;
        height: 100%;
    }

`

export const BaseStats = styled.div`
    position: absolute;
    width: 34.3rem;
    height: 61.3rem;
    left: 36rem;
    top: 2.4rem;
    background: #FFFFFF;
    border-radius: 1.2rem;
    color: black
   
`   

export const PokemonId = styled.p`
    position: absolute;
    width: 3rem;    
    height: 1.9rem;
    left: 77.4rem;
    top: 2.4rem;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.9rem;
`

export const PokemonName = styled.p`
    position: absolute;
    width: 23.8rem;
    height: 5.8rem;
    left: 77.1rem;
    top: 3.9rem;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 5.8rem;
    color: #FFFFFF;
`

export const MoveSet = styled.div`
    position: absolute;
    width: 29.2rem;
    height: 45.3rem;
    left: 77.1rem;
    top: 18.4rem;
    background: #FFFFFF;
    border-radius: .8rem;
    color: black;
`

export const PokemonImage = styled.img`
    position: absolute;
    width: 27rem;
    height: 27rem;
    right: 0;
    top: -10rem;
    z-index: 2;
    z-index: 2;
`

export const PokemonType = styled.img`
  max-width: 10rem;
  min-width: 10rem;
  height: 3.2rem;
  margin-right: 0.8rem;
  z-index: 2;
  display: flex;
  flex-direction: row;
`

export const TypesContainer = styled.div`
    position: absolute;
    left: 77.1rem;
    top: 10.4rem;
    z-index: 2;
    display: flex;
    flex-direction: row;
`

export const StatsNames = styled.div`
    color: black;


`

export const PokeballImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  
`
