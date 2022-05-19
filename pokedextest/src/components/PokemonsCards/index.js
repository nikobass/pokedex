import React, { useEffect }  from 'react';
import { connect, useDispatch } from 'react-redux';
import {getPokemonsFromAPI} from '../../actions';
import PokemonCard from '../PokemonCard';
import { Link } from 'react-router-dom';

const PokemonsCards = ({pokemons}) => {

    const dispatch = useDispatch();
    useEffect(() => {       
        dispatch(getPokemonsFromAPI()); 
    }, []);

    return(
        <div>
          {
            pokemons.map((pokemon, index) => 
            <div>
              <div>
                <Link to={`pokemon/${index+1}`}>
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