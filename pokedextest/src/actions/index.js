export const GET_POKEMON_FROM_API = 'GET_POKEMON_FROM_API';
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';

export const getPokemonDetailsFromAPI = () => ({
    type: GET_POKEMON_FROM_API
});

export const getPokemonSuccess = (pokemonAPI) => ({
    type: GET_POKEMON_SUCCESS,
    pokemonAPI
});