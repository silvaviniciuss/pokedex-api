import React from "react";
import {
    PokemonDetailPageStyle, TitleDetailContainer, TitleDetail,
    PokemonDetailContainer, PokemonFrontImage, PokemonBackImage,
    BaseStats, PokemonId, PokemonName, MoveSet, PokemonImage, TypesContainer,
    PokemonType, PokeballImage, StatsNames
} from "./PokemonDetailPageStyle";
import { useLocation, useParams } from "react-router-dom";
import { pokemonCardColor } from "../../utils/PokemonCardColor";
import { pokemonTypeCards } from "../../utils/PokemonTypeCards";
import pokeImage from "../../assets/img/pngwing.png"
import { Progress, ChakraProvider } from "@chakra-ui/react";


export const PokemonDetailsPage = ({ pokemons, pokedex }) => {
    let pokeId = useParams()

    let locate = useLocation()

    const paramentro = locate.pathname.split("/")[2]

    const findPokemonInPokedex = pokedex.find((pokemon) => pokemon.data.id.toString() === paramentro)
    const findPokemonInPokemonList = pokemons.find((pokemon) => pokemon.data.id.toString() === paramentro)

    console.log(pokemons)

    const result = () => {
        if (findPokemonInPokemonList) {
            return pokemons.map((pokemon) => {
                if (pokemon.data.id.toString() === pokeId.id) {
                    return <PokemonDetailContainer
                        color={pokemonCardColor(pokemon.data.types[0].type.name)}
                    >
                        <PokemonFrontImage>
                            <img
                                src={pokemon.data.sprites.front_default}
                            />
                        </PokemonFrontImage>
                        <PokemonBackImage>
                            <img
                                src={pokemon.data.sprites.back_default}
                            />
                        </PokemonBackImage>
                        <BaseStats>
                            {pokemon.data.stats.map((poke) => {
                                return (<div>
                                    <ChakraProvider>
                                        <StatsNames>
                                            {poke.stat.name} :
                                            <Progress
                                                max={200}
                                                size='lg'
                                                hasStripe
                                                colorScheme='orange'
                                                value={poke.base_stat}>
                                            </Progress>
                                        </StatsNames>
                                    </ChakraProvider>
                                </div>)
                            })}
                        </BaseStats>
                        <PokemonId>#{
                            pokemon.data.id.toString().length === 1 ?
                                `0${pokemon.data.id}` : `${pokemon.data.id}`
                        }</PokemonId>
                        <PokemonName>{pokemon.data.name}</PokemonName>
                        <TypesContainer>
                            {pokemon.data.types.map((type) => {
                                return <PokemonType
                                    key={type.id}
                                    src={pokemonTypeCards(type.type.name)}
                                />
                            })
                            }
                        </TypesContainer>
                        <PokemonImage src={pokemon.data.sprites.other["official-artwork"].front_default} />
                        <PokeballImage src={pokeImage} alt="pokeball" />
                        <MoveSet>
                            {pokemon.data.moves.map((poke, i)=> {
                                return i < 8 && <p
                                key={i}
                                >{poke.move.name}</p>
                            })}

                        </MoveSet>
                    </PokemonDetailContainer>
                }
            })
        } else if (findPokemonInPokedex) {
            return pokedex.map((pokemon) => {
                if (pokemon.data.id.toString() === pokeId.id) {
                    return<PokemonDetailContainer
                    color={pokemonCardColor(pokemon.data.types[0].type.name)}
                >
                    <PokemonFrontImage>
                        <img
                            src={pokemon.data.sprites.front_default}
                        />
                    </PokemonFrontImage>
                    <PokemonBackImage>
                        <img
                            src={pokemon.data.sprites.back_default}
                        />
                    </PokemonBackImage>
                    <BaseStats>
                        {pokemon.data.stats.map((poke) => {
                            return (<div>
                                <ChakraProvider>
                                    <StatsNames>
                                        {poke.stat.name} :
                                        <Progress
                                            max={200}
                                            size='lg'
                                            hasStripe
                                            colorScheme='orange'
                                            value={poke.base_stat}>
                                        </Progress>
                                    </StatsNames>
                                </ChakraProvider>
                            </div>)
                        })}
                    </BaseStats>
                    <PokemonId>#{
                        pokemon.data.id.toString().length === 1 ?
                            `0${pokemon.data.id}` : `${pokemon.data.id}`
                    }</PokemonId>
                    <PokemonName>{pokemon.data.name}</PokemonName>
                    <TypesContainer>
                        {pokemon.data.types.map((type) => {
                            return <PokemonType
                                key={type.id}
                                src={pokemonTypeCards(type.type.name)}
                            />
                        })
                        }
                    </TypesContainer>
                    <PokemonImage src={pokemon.data.sprites.other["official-artwork"].front_default} />
                    <PokeballImage src={pokeImage} alt="pokeball" />
                    <MoveSet>
                        {pokemon.data.moves.map((poke, i)=> {
                            return i < 8 && <p
                            key={i}
                            >{poke.move.name}</p>
                        })}

                    </MoveSet>
                </PokemonDetailContainer>
            }
        })
        }
    }
    return (
        <PokemonDetailPageStyle>
            <TitleDetailContainer>
                <TitleDetail>Detalhes</TitleDetail>
            </TitleDetailContainer>
            {result()}
        </PokemonDetailPageStyle>
    )
}