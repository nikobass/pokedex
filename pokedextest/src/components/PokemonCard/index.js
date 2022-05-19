import React from 'react';

const PokemonCard = ({pokemonName, pokemonId}) => {
  return (
    <div>
      <h3>{pokemonName}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
        alt="Grapefruit slice atop a pile of other slices">
      </img>  
    </div>
  );
};

export default PokemonCard;