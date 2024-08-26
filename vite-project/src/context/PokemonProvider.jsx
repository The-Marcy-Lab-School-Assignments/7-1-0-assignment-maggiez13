import { useState } from "react";
import handleFetch from '../utils/handleFetch';
import PokemonContext from "./PokemonContext";
import { useEffect } from "react";

// TODO: Import the PokemonContext

const starterPokemon = [
    {
        id: 0,
        name: "butterfree 1",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 1,
        name: "butterfree 2",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 2,
        name: "butterfree 3",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    }
]

const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState(starterPokemon);
    const [filteredPokemon, setFilteredPokemon] = useState(starterPokemon);

    // TODO: use useEffect to fetch data from the local JSON server (remember to start JSON server!)
    useEffect(() => {
        // console.log("useEffect is running");

        const fetchPokemon = async () => {
            const [data, _] = await handleFetch("http://localhost:4000/pokemon");
            console.log("Fetched data:", data); 
            setAllPokemon(data);  
            setFilteredPokemon(data);  
        };

        fetchPokemon();
    }, []);

    const addPokemon = (pokemon) => {
        setAllPokemon(prev => [...prev, pokemon]);
        setFilteredPokemon(prev => [...prev, pokemon]);
    };

    // TODO: Add values to be included in the context here
    let contextValues = { allPokemon: filteredPokemon, setAllPokemon, setFilteredPokemon, addPokemon };

    // TODO: Wrap the {children} in the PokemonContext.Provider and provide the values above
    return (
        <PokemonContext.Provider value={contextValues}>
            { children }
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;