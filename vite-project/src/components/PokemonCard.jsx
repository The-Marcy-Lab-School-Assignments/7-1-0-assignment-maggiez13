// TODO: This component should render a single pokemon's stats and image.

import { useState } from 'react';

const PokemonCard = ({ pokemon }) => {
    const [showFront, setShowFront] = useState(true);

    return (
        <div className="ui card" onClick={() => setShowFront(!showFront)}>
            <div>
                <div className="image">
                    <img alt={pokemon.name} src={showFront ? pokemon.front : pokemon.back} />
                </div>
                <div className="content">
                    <div className="header">{pokemon.name}</div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        {pokemon.hp}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;
