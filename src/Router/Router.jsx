import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../Components/Header/Header"
import { PokemonListPage } from "../Pages/PokemonListPage/PokemonListPage"
import { PokedexPage } from "../Pages/PokedexPage/PokedexPage"
import { PokemonDetailsPage } from "../Pages/PokemonDetailPage/PokemonDetailPage"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../Constants/baseUrl"


export const Router = () => {

    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

   useEffect(()=>{
    loadingPokemons()
    console.log(pokemons)
   },[])

    const loadingPokemons = () => {
        let getPokemons = []
        for (let i = 1; i < 11; i++) {
            getPokemons.push( `https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(getPokemons.map((poke) => axios.get(poke))).then((res) => setPokemons(res));
    }
    
    const removePokedex = (poke) => {
        const addPokemonList = pokedex.find((pokemon => {
            return pokemon.data.id === poke.data.id
        }))
        const removePokemonFromPokedex = pokedex.filter((pokemon) => {
            if (poke.data.id === pokemon.data.id) {
                return poke.data.id !== pokemon.data.id
            } else {
                return poke
            }
        })
        setPokedex(removePokemonFromPokedex)
        setPokemons([...pokemons, addPokemonList])
    }

    const addPokedex = (poke) => {
        setPokedex([...pokedex, poke])
        const removePokemonFromPokemonList = pokemons.filter((pokemon) => {
            if (poke.data.id === pokemon.data.id) {
                return poke.data.id !== pokemon.data.id
            } else {
                return poke
            }
        })
        setPokemons(removePokemonFromPokemonList)
    }
    
    return (
        <BrowserRouter>
            <Header
                pokemon={pokemons}
                pokedex={pokedex}
                removePokedex={removePokedex}
                addPokedex={addPokedex}
            />
            <Routes>
                <Route path="/" element={<PokemonListPage
                    pokemons={pokemons}
                    setPokemons={setPokemons}
                    pokedex={pokedex}
                    setPokedex={setPokedex}
                    addPokedex={addPokedex}
                />} />
                <Route path="/pokedex/" element={<PokedexPage
                    pokemons={pokemons}
                    pokedex={pokedex}
                    removePokedex={removePokedex}
                />} />
                <Route path="/pokemon-detail/:id" element={<PokemonDetailsPage
                    pokemons={pokemons}
                    pokedex={pokedex}

                />} />
            </Routes>
        </BrowserRouter>
    )
}