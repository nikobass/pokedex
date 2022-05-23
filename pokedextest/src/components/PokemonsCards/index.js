import React, { useEffect }  from 'react';
import { connect, useDispatch } from 'react-redux';
import {getPokemonsFromAPI, setPokemonName, submitFormPokemon} from '../../actions';
import PokemonCard from '../PokemonCard';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import imgpokedex from '../../pokedex.2800773d.png'

import './pokemonscards.scss'

const PokemonsCards = ({pokemons,pokemonName, inputPokemonName,handleSubmit, handleInput}) => { 

    const dispatch = useDispatch();
    useEffect(() => {       
        dispatch(getPokemonsFromAPI()); 
    }, []);   

    return(                 
        <div className='main'>
        <div>
          <h1 className='title-header'>
            <img className="image-header" src={imgpokedex}
                alt="image pokedex">
            </img>   
          </h1>          
          <form onSubmit={handleSubmit}
         >
           { pokemonName &&<Redirect to={`/pokemon/${pokemonName}`} />}
          <input            
            type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="nom ou numéro d'un pokémon"
            onChange={handleInput}
            value={inputPokemonName}
            required          
          />        
     
     <button onClick={handleSubmit}>
          <FontAwesomeIcon icon={faSearch} />
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
    pokemons: state.pokemons,
    pokemonName: state.pokemonName,
    inputPokemonName: state.inputPokemonName
  });   

  const mapDispatchToProps = (dispatch) => ({
    handleInput: (event) => {
      dispatch(setPokemonName(event.target.value))
    },
    handleSubmit: (event) => {  
      event.preventDefault();     
      dispatch(submitFormPokemon())
    }
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(PokemonsCards);