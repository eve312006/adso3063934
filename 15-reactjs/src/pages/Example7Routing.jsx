import { Routes, Route, Link, useLocation } from 'react-router-dom';
import BtnBack from '../components/BtnBack';
import './Example7Routing.css';

const POKEMONS = [
    {
        id: 25,
        name: 'Pikachu',
        type: 'Electric',
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        description: 'A friendly electric mouse. Good at short bursts of speed and agility.'
    },
    {
        id: 4,
        name: 'Charmander',
        type: 'Fire',
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
        description: 'A small flame-tailed lizard. Likes warm places and battles.'
    },
    {
        id: 1,
        name: 'Bulbasaur',
        type: 'Grass/Poison',
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        description: 'A calm starter Pokémon with a plant bulb on its back.'
    },
    {
        id: 7,
        name: 'Squirtle',
        type: 'Water',
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
        description: 'A small turtle Pokémon. Loves water and has a strong shell.'
    },
];

function GeneralInfo() {
    return (
        <section className="info">
            <h3>¿Qué hace este ejemplo?</h3>
            <p>
                Demuestra rutas internas usando <strong>React Router</strong>. Navega entre una
                vista general, una lista de Pokémon y una vista de detalles sin recargar la página.
            </p>
            <ul>
                <li>Rutas relativas y absolutas</li>
                <li>Uso de query params para detalles</li>
                <li>Componentes reutilizables y estilo simple</li>
            </ul>
        </section>
    );
}

function PokemonList() {
    return (
        <section className="list">
            <h3>Lista de Pokémon</h3>
            <div className="cardGrid">
                {POKEMONS.map(p => (
                    <article key={p.id} className="pokeCard">
                        <img src={p.img} alt={p.name} />
                        <div className="cardBody">
                            <h4>{p.name}</h4>
                            <p className="type">{p.type}</p>
                            <p className="desc">{p.description}</p>
                            <Link className="btn" to={`/example7/details?name=${encodeURIComponent(p.name)}`}>
                                Ver detalles
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

function PokemonDetails() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const name = params.get('name');
    const pokemon = POKEMONS.find(p => p.name.toLowerCase() === (name || '').toLowerCase());

    if (!name) {
        return (
            <section className="details">
                <h3>Selecciona un Pokémon</h3>
                <p>Usa la lista o los enlaces rápidos para ver información detallada.</p>
            </section>
        );
    }

    if (!pokemon) {
        return (
            <section className="details">
                <h3>Pokémon no encontrado</h3>
                <p>No se encontró información para <strong>{name}</strong>.</p>
            </section>
        );
    }

    return (
        <section className="details">
            <div className="detailsCard">
                <img src={pokemon.img} alt={pokemon.name} />
                <div>
                    <h3>{pokemon.name}</h3>
                    <p className="type">Tipo: {pokemon.type}</p>
                    <p>{pokemon.description}</p>
                    <p className="meta">ID: {pokemon.id}</p>
                </div>
            </div>
        </section>
    );
}

function InternalNavigation() {
    return (
        <nav className="internalNav">
            <Link className="navBtn" to="/example7">🏠 Home</Link>
            <Link className="navBtn" to="/example7/list">✅ Lista</Link>
            <Link className="navBtn" to="/example7/details?name=Pikachu">⚡ Pikachu</Link>
            <Link className="navBtn" to="/example7/details?name=Charmander">🔥 Charmander</Link>
        </nav>
    );
}

function Example7Routing() {
    const location = useLocation();
    return (
        <div className="container example7">
            <BtnBack />
            <header className="header">
                <h2>Example 7: React Router</h2>
                <p className="muted">Navegación entre vistas sin recargar el navegador.</p>
                <div className="currentPath">Ruta: {location.pathname}</div>
            </header>

            <InternalNavigation />

            <main className="content">
                <Routes>
                    <Route path="/" element={<GeneralInfo />} />
                    <Route path="/list" element={<PokemonList />} />
                    <Route path="/details" element={<PokemonDetails />} />
                </Routes>
            </main>
        </div>
    );
}

export default Example7Routing;