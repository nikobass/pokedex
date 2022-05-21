import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './pokemoncard.css'

import {
  useParams
} from "react-router-dom";

const PokemonCard = ({pokemonName, pokemonId}) => {
  const { id } = useParams();
  const [pokename, setName] = React.useState(null);
  const [pokeid, setId] = React.useState(null);
  const [color, setColor] = React.useState(null);
  const [habitat, setHabitat] = React.useState(null);
  const [types, setType] = React.useState([]); 
  const [errorMsg, setErrorMsg] = React.useState(null);
  
  React.useEffect(() => {
    
    if(id) {
      axios({
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${id}`          
      })
      .then((response) => {           
          setName(response.data.name);    
          setId(response.data.id);
          setType(response.data.types);            

          axios({
            method: 'get',
            url: `${response.data.species.url}`          
          }).then((response) => {
            setColor(response.data.color.name);
            setHabitat(response.data.habitat.name);
          })
      }).catch(error => setErrorMsg("Ce pokemon est introuvable"));
    }
  }, []); 
 
 

  return (
    <div>
       { !id && 
       <div>
          <h3 className='pokename'>{pokemonName} - n°{pokemonId}</h3>            
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
          alt="image pokemon">
        </img>     
        </div>
      } 


      { id && 
        <div>
          <Link to={`/`}>
            <h1 className='title-header'>Pokedex</h1>
          </Link>
          <div className='pokecard'>
         
          {errorMsg && <p>{errorMsg}</p>}  
         
          {!errorMsg &&   
          <div className={!pokeid ? 'none' : 'show'}>
              <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeid}.png`}
            alt="image pokemon">
          </img>
          
          <p>Nom: {pokename}</p> 
          <p>Numéro: {pokeid}</p> 
          <p>Color: {color}</p>
          <p>Habitat: {habitat}</p>
          <p>Type(s):</p>  
          
            {            
              types.map((pokeType) =>             
                  <p key={pokeid}>{pokeType.type.name}</p>        
              )
            }
            </div>
          }  
          
          </div>
        </div>
      } 
     
    </div>
  );
};

export default PokemonCard;