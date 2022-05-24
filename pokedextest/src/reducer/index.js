const initializeState = {
    pokemons: [{}] ,
    pokemonName: '',
    inputPokemonName: '',
    page: 20
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
        case 'SET_PAGES_MORE':
            return {
                ...state,              
                page: state.page*2
            }
        case 'SET_PAGES_LESS':
            return {
                ...state,              
                page: state.page/2
            }
        default: 
            return state;
    }
};

export default reducer;