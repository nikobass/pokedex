const initializeState = {
    pokemons: [{}] ,
    pokemonName: '',
    inputPokemonName: ''
};

const reducer = (state = initializeState, action) => {
    switch(action.type) {
        case 'GET_POKEMONS_SUCCESS':
            return {
                ...state,
                pokemons: action.pokemonsAPI,         
            }
        case 'GET_POKEMON_DETAILS_SUCCESS':
            return {
                ...state,
                pokemonName: ''
            }
        case 'CHANGE_INPUT_POKEMON':
        return {
            ...state,
            inputPokemonName: action.inputPokemonValue
        }
        case 'SUBMIT_FORM':
            return {
                ...state,
                pokemonName: state.inputPokemonName,
                inputPokemonName: ''            
            }
        default: 
            return state;
    }
};

export default reducer;