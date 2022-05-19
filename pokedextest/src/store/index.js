import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducer';

import pokemonMiddleware from '../middlewares/pokemon';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const enhancers = composeEnhancers(
  applyMiddleware(pokemonMiddleware)
);

const store = createStore(reducer, enhancers);

export default store;