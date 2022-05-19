const initializeState = {
    pokemons: [{}] 
};

const reducer = (state = initializeState, action) => {
    switch(action.type) {
        case 'GET_POKEMONS_SUCCESS':
            return {
                ...state,
                pokemons: action.pokemonsAPI
            }
        default: 
            return state;
    }
};

export default reducer;