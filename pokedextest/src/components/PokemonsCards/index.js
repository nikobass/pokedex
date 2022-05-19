import React, { useEffect }  from 'react';
import { connect, useDispatch } from 'react-redux';
import {getPokemonDetailsFromAPI} from '../../actions';
import PokemonCard from '../PokemonCard';
import { Link } from 'react-router-dom';

const PokemonsCards = ({pokemons}) => {

    const dispatch = useDispatch();
    useEffect(() => {       
        dispatch(getPokemonDetailsFromAPI()); 
    }, []);

    return(
        <div>
          {
            pokemons.map((pokemon, index) => 
            <div>
              <div>
                <Link to={pokemon.name}>
                    <PokemonCard 
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