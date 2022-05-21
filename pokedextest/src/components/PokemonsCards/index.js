import React, { useEffect }  from 'react';
import { connect, useDispatch } from 'react-redux';
import {getPokemonsFromAPI} from '../../actions';
import PokemonCard from '../PokemonCard';
import { Link, useHistory } from 'react-router-dom';

import './pokemonscards.css'

const PokemonsCards = ({pokemons}) => { 

    const dispatch = useDispatch();
    useEffect(() => {       
        dispatch(getPokemonsFromAPI()); 
    }, []);

    const [search, setSearch] = React.useState();
    let history=useHistory();
 
    return(           
        <div className='main'>
        <div>
          <h1 className='title-header'>Pokedex</h1>      
          <form>
          <input            
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button onClick={() => history.push(`/pokemon/${search}`)}>
            search
          </button>
          </form>     
        </div>     
          {
            pokemons.map((pokemon, index) => 
            <div>
              <div className='cards'>
                <Link to={`pokemon/${index+1}`}>
                    <PokemonCard 
                      key={pokemon.id}
                      pokemonName={pokemon.name}         
                      pokemonId={index+1}                
                    />
                </Link>                      
              </div>  
            </div>
            )
          }          
        </div>
    )
}

const mapStateToProps = (state) => ({
    pokemons: state.pokemons
  });   
  
export default connect(mapStateToProps)(PokemonsCards);