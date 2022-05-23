import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './pokemoncard.scss'

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
      }).catch(error => setErrorMsg("Ce pokemon est introuvable. Veuillez retourner à l'accueil."));
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
          <div class={!pokeid ? 'none' : 'show, wrapper'}>
            
  <div class="card">
    <div class="card__body">
      <div class="card__head">
        <div class="main-info">
          <div class="pre-evo">
            <span class="pre-evo__badge"></span>
            <span class="pre-evo__badge-front"></span>
            <span class="pre-evo__title">N°{pokeid}</span>
            <img className='img-poke'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeid}.png`}
            alt="image pokemon">
          </img>   
            <div class="pre-evo__img">
             
            </div>
          </div>     
          <span class="put-card">Pokemon card</span>
          <h1 class="name">{pokename}</h1>       
        </div>

        <div class="frame">
          <div class="frame__img">         
         
          </div>
        </div>


        <div class="stats">
          <span>Color: {color} - Habitat: {habitat} </span>
        </div>
        <ul class="attacks">
          
          <li class="attack">
           
            <p>
              <strong>Type(s)</strong>{            
              types.map((pokeType) =>             
                  <p key={pokeid}>{pokeType.type.name}</p>        
              )
            }
            </p>
          
          </li>
        </ul>
        

      </div>
     

      <div class="footer">     
        <p>&copy; 1995, 96, 98, 99 Nintendo, Creatures, GAMEFREAK. &copy; 1999 Wizards.</p>       
        <p><i class="fa fa-fw fa-star"></i></p>
      </div>
    </div>
  </div>
</div>
          <div className='pokecard'>
         
          {errorMsg && <p className='errormsg'>{errorMsg}</p>}          
         
          
          </div>
          
        </div>
      } 
    </div>
  );
};

export default PokemonCard;