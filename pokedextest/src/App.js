import React from 'react';
import PokemonsCards from './components/PokemonsCards';
import PokemonCard from './components/PokemonCard';
import { Switch, Route} from 'react-router-dom';

const App = () => {
  return(
    <div>
        <Switch>
          <Route exact path="/">    
            <PokemonsCards />
          </Route>
          <Route exact path="/:name">    
            <PokemonCard />
          </Route>
        </Switch> 
    </div>
  )
}

export default App;