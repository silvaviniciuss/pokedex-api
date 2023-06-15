
export const goToPokemonListPage = (navigate) => {
    return (
        navigate('/')
    )
}

export const goToPokedexPage = (navigate) => {

    return (
        navigate('/pokedex/')
    )
}


export const goToPokemonDetailsPage = (navigate, id) => {
    return (
        navigate(`/pokemon-detail/${id}`)
    )
}
