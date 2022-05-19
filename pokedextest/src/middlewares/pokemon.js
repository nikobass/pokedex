import axios from 'axios';

import { getPokemonsSuccess, GET_POKEMONS_FROM_API } from '../actions';

const pokemonMiddleware = (store) => (next) => (action) => {

    switch (action.type) {
      case GET_POKEMONS_FROM_API: {         
  
        axios({
          method: 'get',
          url: `https://pokeapi.co/api/v2/pokemon/`          
        })
        .then((response) => {          
          store.dispatch(getPokemonsSuccess(response.data.results));
        })
        .catch(error => console.log(error));
        break;
      } 
    
      default:
        next(action);
        break;
    }
  };
  
  export default pokemonMiddleware;