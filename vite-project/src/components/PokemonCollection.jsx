import PokemonCard from './PokemonCard';
import PokemonContext from '../context/PokemonContext';
import { useContext } from 'react';
// TODO: import the PokemonContext and useContext

const PokemonCollection = () => {

    // TODO: Replace this to get the pokemon from PokemonContext
    const { allPokemon } = useContext(PokemonContext);

    return (
        <div className="ui six cards">
            {allPokemon?.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
}

export default PokemonCollection