const initializeState = {
    pokemons: [{}] 
};

const reducer = (state = initializeState, action) => {
    switch(action.type) {
        case 'GET_POKEMON_SUCCESS':
            return {
                ...state,
                pokemons: action.pokemonAPI
            }
        default: 
            return state;
    }
};

export default reducer;