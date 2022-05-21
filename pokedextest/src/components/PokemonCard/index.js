import React from 'react';
import axios from 'axios';

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
      }).catch(error => console.log(error));
    }
  }, []); 
 
  return (
    <div>
       { !id && 
       <div>
          <h3>{pokemonName}</h3>            
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
          alt="image pokemon">
        </img>     
        </div>
      } 

      
      { id && 
        <div>
           <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeid}.png`}
            alt="image pokemon">
          </img>
          <p>Nom: {pokename}</p> 
          <p>Numéro: {pokeid}</p> 
          <p>Color: {color}</p>
          <p>Habitat: {habitat}</p>
          <p>Type(s):</p>  
          <ul>
            {            
              types.map((pokeType) =>             
                  <li key={pokeid}>{pokeType.type.name}</li>        
              )
            }
          </ul>        
          
        </div>
      } 
     
    </div>
  );
};

export default PokemonCard;