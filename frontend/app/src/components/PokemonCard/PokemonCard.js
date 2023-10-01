import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonCard({ pokemonName }) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        async function fetchPokemonData() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                setPokemonData(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados do pokémon:', error);
            }
        }

        fetchPokemonData();
    }, [pokemonName]);

    if (!pokemonData) {
        return <div>Loading...</div>;
    }

    const { name, sprites, types } = pokemonData;
    const imageUrl = sprites.front_default;
    const pokemonTypes = types.map(type => type.type.name).join(', ');

    return (
        <div className="pokemon-card">
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
            <p>Type: {pokemonTypes}</p>
        </div>
    );
}

export default PokemonCard
