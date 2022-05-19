export const GET_POKEMONS_FROM_API = 'GET_POKEMONS_FROM_API';
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';

export const getPokemonsFromAPI = () => ({
    type: GET_POKEMONS_FROM_API
});

export const getPokemonsSuccess = (pokemonsAPI) => ({
    type: GET_POKEMONS_SUCCESS,
    pokemonsAPI
});