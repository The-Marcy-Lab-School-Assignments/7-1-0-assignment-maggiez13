import { useState, useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const PokemonForm = () => {
    const [name, setName] = useState("");
    const [hp, setHp] = useState("");
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");
    const { addPokemon } = useContext(PokemonContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newPokemon = { name, hp: parseInt(hp), front, back };
    
        try {
            const response = await fetch('http://localhost:4000/pokemon', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPokemon),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            console.log('New Pokémon added:', result); 
            addPokemon(prev => [...prev, result]); // add new Pokémon to the list
        
            setName("");
            setHp("");
            setFront("");
            setBack("");
        } catch (error) {
            console.error('Error adding new Pokémon:', error);
        }
    };    

    return (
        <div>
            <h3>Add a Pokémon!</h3>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="field ui fluid">
                        <label>HP</label>
                        <input
                            type="text"
                            name="hp"
                            placeholder="HP"
                            value={hp}
                            onChange={(e) => setHp(e.target.value)}
                        />
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input
                            type="text"
                            name="front"
                            placeholder="url"
                            value={front}
                            onChange={(e) => setFront(e.target.value)}
                        />
                    </div>
                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input
                            type="text"
                            name="back"
                            placeholder="url"
                            value={back}
                            onChange={(e) => setBack(e.target.value)}
                        />
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PokemonForm;
