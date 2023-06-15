import React from "react";
import { PokemonCardContainer, PokemonId, PokemonName, 
    TypesContainer, PokemonImage , Button, PokeballImage, PokemonType, PokemonDetail} from "./PokemonCardStyle";
import PokebalImage from "../../assets/img/pngwing2.png"
import { pokemonTypeCards } from "../../utils/PokemonTypeCards";
import {useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetailsPage } from "../../Router/Coordination";

export const PokemonCard = ({pokemon, cardColor, addPokedex, removePokedex
,id, name, image, type
}) => {
    const navigate = useNavigate()
    const locate = useLocation()

    const returnButton = () => {
        if(locate.pathname === '/') {
            return (
                <Button onClick={() => addPokedex(pokemon)}>Capturar!</Button>
            )
        } else if (locate.pathname === '/pokedex/'){
            return (
                <Button 
                style={{background:"#FF6262", color: "white"}}
                onClick={()=> removePokedex(pokemon)}
                >Excluir</Button>
            )
        }
    }
    
    return (
        <PokemonCardContainer color={cardColor}>
            <div>
                <PokemonId>#{id.toString().length === 1 ? `0${id}` : `${id}`}</PokemonId>
                <PokemonName>{name[0].toUpperCase()
                + name.substring(1)
                }</PokemonName>
                <TypesContainer>
                    { type.map((type) => {
                        return <PokemonType 
                        key={type.id}
                        src={pokemonTypeCards(type.type.name)}/>
                    }) 
                    }
                </TypesContainer>
                <PokemonDetail
                key = {id}
                onClick={() => {
                    goToPokemonDetailsPage(navigate, id)
                }
            }
                >Detalhes</PokemonDetail>
            </div>
            <div>
                <PokemonImage src={image}/>
                {returnButton()}
            </div> 
            <PokeballImage src={PokebalImage} alt="pokeball"/>
        </PokemonCardContainer>
    )
}