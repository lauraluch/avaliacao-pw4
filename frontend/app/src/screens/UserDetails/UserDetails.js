import React, { useState, useEffect } from "react";
import './style.css';
import Header from "../../components/Header/Header";
import { useUser } from '../../App';
import axios from 'axios';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

function UserDetails(props) {
    const [pokemonName, setPokemonName] = useState('');
    const { userData, setUserData } = useUser();
    const { username, pokemonList } = userData;
    const [localPokemonList, setLocalPokemonList] = useState(pokemonList);

    useEffect(() => {
        console.log(username);
        console.log(localPokemonList);
    }, [localPokemonList, username]);

    async function handlePokemonAddition(e) {
        e.preventDefault();
        console.log(username)
        console.log(pokemonList)

        try {
            const pokemonExists = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
            if (pokemonExists.status === 200) {
                const response = await axios.post('http://localhost:3005/addPokemon', {
                    username,
                    pokemonName
                });
    
                if (response.status === 200) {
                    console.log('Pokemon adicionado!');
                    const updatedPokemonList = [...localPokemonList, pokemonName];
                    setLocalPokemonList(updatedPokemonList);
                    setUserData({ username, pokemonList: updatedPokemonList });
                } else {
                    console.log('Falha ao adicionar pokemon.');
                }
            } else {
                console.log('Pokemon não encontrado.');
            }
        } catch (error) {
            console.error('Erro ao adicionar pokemon: ', error);
        }
    }

    return (
        <div>
            <Header title={"User Details"}/>
            <div className="details-body">
                <div className="title-row">
                    <p className="title-desc">Welcome back,</p>
                    <h1 className="title-name">{username}!</h1>
                </div>
                <div>
                    <h2>💜 Your pokemons: </h2>
                    <ul>
                        {pokemonList.map((pokemonName, index) => (
                            <li key={index}>
                                <PokemonCard pokemonName={pokemonName} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>✨ Add pokemons</h2>
                    <form>
                        <div className="form-group">
                            <label className="form-title">Pokemon name: </label>
                            <input type="text" name="pokemon" className="input" placeholder="Pokemon" onChange={(e) => setPokemonName(e.target.value)} required/>
                            <button type="submit" className='add-button' onClick={(e) => handlePokemonAddition(e)}>Add pokemon</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserDetails