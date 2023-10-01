import React, { useState } from "react";
import './style.css';
import Header from "../../components/Header/Header";

function UserDetails(props) {
    const { username, pokemonList } = props;
    const [pokemonName, setPokemonName] = useState('');

    function handlePokemonAddition() {
        console.log(pokemonName)
    }

    function displayPokemons() {
        if (pokemonList.length = 0) {
            return (<h2>Nothing here...</h2>)
        }
        else {
            return 
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
                        { pokemonList.length == 0 ? <p>Nothing here...</p> 
                            : pokemonList.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
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