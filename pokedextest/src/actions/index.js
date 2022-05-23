export const GET_POKEMONS_FROM_API = 'GET_POKEMONS_FROM_API';
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
export const CHANGE_INPUT_POKEMON = 'CHANGE_INPUT_POKEMON';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const GET_POKEMON_DETAILS_SUCCESS = 'GET_POKEMON_DETAILS_SUCCESS';

export const getPokemonsFromAPI = () => ({
    type: GET_POKEMONS_FROM_API
});

export const getPokemonsSuccess = (pokemonsAPI) => ({
    type: GET_POKEMONS_SUCCESS,
    pokemonsAPI
});

export const getPokemonDetailsSuccess = () => ({
    type: GET_POKEMON_DETAILS_SUCCESS
})

export const setPokemonName = (inputPokemonValue) => ({
    type: CHANGE_INPUT_POKEMON,
    inputPokemonValue
});

export const submitFormPokemon =  () => ({
    type: SUBMIT_FORM
});