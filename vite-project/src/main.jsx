import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PokemonProvider from './context/PokemonProvider';

// TODO: Import the PokemonProvider and wrap it around the App component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <PokemonProvider>
        <App />
    </PokemonProvider>
);
