import React from "react";
import { PokedexPageStyle, TitleMyPokemonsContainer, TitleMyPokemons } from "./PokedexPageStyle";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { pokemonCardColor } from "../../utils/PokemonCardColor";
import { PokemonListContainer } from "../PokemonListPage/PokemonListPageStyle"

export const PokedexPage = ({ pokedex, removePokedex}) => {
    
    return (
        <PokedexPageStyle>
            <TitleMyPokemonsContainer>
                <TitleMyPokemons>Meus Pokemons</TitleMyPokemons>
            </TitleMyPokemonsContainer>
            <PokemonListContainer>
                {pokedex
                    .sort((a, b) => {
                        return a.data.id - b.data.id
                    })

                    .map((pokemon) => {
                        console.log(pokemon)
                        return (
                            <PokemonCard
                                cardColor={pokemonCardColor(pokemon.data.types[0].type.name)}
                                key= {pokemon.id}
                                id = {pokemon.data.id}
                                name = {pokemon.data.name}
                                type = {pokemon.data.types}
                                image = {
                                pokemon.data.sprites.other["official-artwork"].front_default
                            }
                                removePokedex= {removePokedex}
                                pokemon={pokemon}
                            />
        
                        )
                    })}
            </PokemonListContainer>
        </PokedexPageStyle>
    )
}
