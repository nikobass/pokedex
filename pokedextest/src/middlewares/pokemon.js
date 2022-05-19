import axios from 'axios';

import { getPokemonSuccess, GET_POKEMON_FROM_API } from '../actions';

const testMiddleware = (store) => (next) => (action) => {

    switch (action.type) {
      case GET_POKEMON_FROM_API: {         
  
        axios({
          method: 'get',
          url: `https://pokeapi.co/api/v2/pokemon/`          
        })
        .then((response) => {            
            console.log(response.data.results);  
          store.dispatch(getPokemonSuccess(response.data.results));
        })
        .catch(error => console.log(error));
        break;
      } 
    
      default:
        next(action);
        break;
    }
  };
  
  export default testMiddleware;