// TODO: Make this a controlled component. On each stroke of the key, it should filter the displayed pokemon

import { useState, useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const Filter = () => {
    const { allPokemon, setFilteredPokemon } = useContext(PokemonContext);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = allPokemon.filter(pokemon =>
            pokemon.name.toLowerCase().includes(term)
        );
        setFilteredPokemon(filtered);
    };

    return (
        <div className="ui search">
            <div className="ui icon input">
                <input
                    className="prompt"
                    placeholder="Search by Name..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <i className="search icon" />
            </div>
        </div>
    );
}

export default Filter;
