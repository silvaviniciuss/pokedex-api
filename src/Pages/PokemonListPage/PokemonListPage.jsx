import React from "react";
import { PokemonPageListStyle, TitleContainer, PokemonListContainer, TitleAllPokemons } from "./PokemonListPageStyle";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { pokemonCardColor } from "../../utils/PokemonCardColor";

export const PokemonListPage = ({ pokemons, addPokedex }) => {

    return (
        <PokemonPageListStyle>
            <TitleContainer  >
                <TitleAllPokemons>Todos os Pokemons</TitleAllPokemons>
            </TitleContainer>
            <PokemonListContainer>
                {pokemons
                    .sort((a, b) => {
                        return a.data.id - b.data.id
                    })
                    .map((pokemon) => {
                        return <PokemonCard
                            cardColor={pokemonCardColor(pokemon.data.types[0].type.name)}
                            key={pokemon.id}
                            id = {pokemon.data.id}
                            name = {pokemon.data.name}
                            type = {pokemon.data.types}
                            image = {
                                pokemon.data.sprites.other["official-artwork"].front_default
                            }
                            addPokedex={addPokedex}
                            pokemon={pokemon}
                        />
                    })
                }
            </PokemonListContainer>
        </PokemonPageListStyle>
    )
}
