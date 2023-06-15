import React from "react"
import { HeaderContainer, PokemonLogoStyle, PokedexButton, PokedexButtonContainer, PokemonLogoContainer, AllPokemons } from "./HeaderStyle"
import PokemonLogo from "../../assets/img/PokemonLogo.png"
import { goToPokedexPage, goToPokemonListPage } from "../../Router/Coordination"
import { useLocation, useNavigate } from "react-router-dom"

export const Header = ({pokemon ,pokedex, removePokedex, addPokedex}) => {
    const navigate = useNavigate()
    let locate = useLocation()
    
    const pokeId = locate.pathname.split("/")[2]

    const findPokemonInPokedex = pokedex.find((pokemon)=> pokemon.data.id.toString() === pokeId)
    const findPokemonInPokemonList = pokemon.find((pokemon)=> pokemon.data.id.toString() === pokeId)

    const returnButton = () => {
        if(findPokemonInPokedex) {
            
            return<PokedexButton
                    style={{background:"#FF6262"}}
                    onClick={()=> {
                    removePokedex(findPokemonInPokedex)
                    goToPokedexPage(navigate)
                    }}
                    >Excluir da Pokédex</PokedexButton>
        } else if (findPokemonInPokedex) {
            return<PokedexButton
            onClick={() =>{
                addPokedex (findPokemonInPokemonList)
                goToPokedexPage(navigate)
            } }
            >Adicionar à Pokédex</PokedexButton>
        }
    }

    const renderScreen = () => {
        if (locate.pathname === "/") {
            return <HeaderContainer>
                <PokemonLogoContainer>
                    <PokemonLogoStyle src={PokemonLogo} />
                </PokemonLogoContainer>
                <PokedexButtonContainer>
                    <PokedexButton
                        onClick={() =>
                            goToPokedexPage(navigate)
                        }
                    >Pokédex</PokedexButton>
                </PokedexButtonContainer>
            </HeaderContainer>
        } else if (locate.pathname.includes("/pokedex/")) {
            return <HeaderContainer>
                <AllPokemons onClick={() =>
                    goToPokemonListPage(navigate)

                }>
                    <p>Todos os Pokemons</p>
                </AllPokemons>
                <PokemonLogoContainer>
                    <PokemonLogoStyle src={PokemonLogo} />
                </PokemonLogoContainer>
            </HeaderContainer>
        }
        else if (locate.pathname.includes("/pokemon-detail/")) {
            return <HeaderContainer>
                <AllPokemons onClick={() => {
                    goToPokemonListPage(navigate)
                }
                }>
                    <p>Todos os Pokemons</p>
                </AllPokemons>
                <PokemonLogoContainer>
                    <PokemonLogoStyle src={PokemonLogo} />
                </PokemonLogoContainer>
                <PokedexButtonContainer>
                    {returnButton()}
                </PokedexButtonContainer>
            </HeaderContainer>
        }
    }
    return (
        renderScreen()
    )
}
