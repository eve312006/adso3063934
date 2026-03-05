import { useState } from "react";
import BtnBack from "../components/BtnBack";
import CardPokemon from "../components/CardPokemon";

function Example6CondicionalListas() {
    const initialPokemons = [
        { id: 1, name: 'Pikachu', type: 'Electric', power: 'Thunderbolt', level: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png", legendary: false },
        { id: 2, name: 'Charizard', type: 'Fire', power: 'Flamethrower', level: 36, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png", legendary: false },
        { id: 3, name: 'Mewtwo', type: 'Psychic', power: 'Psychic', level: 70, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png", legendary: true },
        { id: 4, name: 'Squirtle', type: 'Water', power: 'Water Gun', level: 10, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png", legendary: false },
        { id: 5, name: 'Bulbasaur', type: 'Grass', power: 'Razor Leaf', level: 12, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png", legendary: false },
        { id: 6, name: 'Dragonite', type: 'Dragon', power: 'Dragon Claw', level: 55, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png", legendary: false },
        { id: 7, name: 'Gyarados', type: 'Water', power: 'Hydro Pump', level: 30, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png", legendary: false },
        { id: 8, name: 'Arcanine', type: 'Fire', power: 'Flare Blitz', level: 50, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png", legendary: false },
        { id: 9, name: 'Alakazam', type: 'Psychic', power: 'Shadow Ball', level: 45, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png", legendary: false },
        { id: 10, name: 'Gengar', type: 'Ghost', power: 'Dark Pulse', level: 40, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png", legendary: false },
        { id: 11, name: 'Snorlax', type: 'Normal', power: 'Body Slam', level: 35, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png", legendary: false },
        { id: 12, name: 'Eevee', type: 'Normal', power: 'Quick Attack', level: 20, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png", legendary: false },
        { id: 13, name: 'Jigglypuff', type: 'Normal/Fairy', power: 'Sing', level: 15, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png", legendary: false },
        { id: 14, name: 'Psyduck', type: 'Water', power: 'Confusion', level: 18, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png", legendary: false },
        { id: 15, name: 'Lapras', type: 'Water/Ice', power: 'Ice Beam', level: 25, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png", legendary: false },
        { id: 16, name: 'Machamp', type: 'Fighting', power: 'Cross Chop', level: 50, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png", legendary: false },
        { id: 17, name: 'Gardevoir', type: 'Psychic/Fairy', power: 'Moonblast', level: 40, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png", legendary: false },
        { id: 18, name: 'Lucario', type: 'Fighting/Steel', power: 'Aura Sphere', level: 45, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png", legendary: false },
        { id: 19, name: 'Tyranitar', type: 'Rock/Dark', power: 'Stone Edge', level: 55, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png", legendary: false },
        { id: 20, name: 'Salamence', type: 'Dragon/Flying', power: 'Dragon Breath', level: 50, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png", legendary: false },
        { id: 21, name: 'Metagross', type: 'Steel/Psychic', power: 'Meteor Mash', level: 60, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png", legendary: false },  
        

    ];

    const [pokemons, setPokemons] = useState([]); // list of added pokemons
    const [filterType, setFilterType] = useState("");
    const [levelFilter, setLevelFilter] = useState("");
    const [hasAnyAdded, setHasAnyAdded] = useState(false);


    // derive unique type and level options for selects
    const typeOptions = [...new Set(pokemons.map(p => p.type))];
    const levelOptions = [...new Set(pokemons.map(p => p.level))].sort((a,b)=>a-b);

    const filtered = pokemons.filter(p => {
        const matchesType = filterType === "" || p.type === filterType;
        const matchesLevel = levelFilter === "" || p.level === parseInt(levelFilter, 10);
        return matchesType && matchesLevel;
    });

    // add next pokemon from initial list (sequentially)
    const handleAddNext = () => {
        const nextIndex = pokemons.length;
        if (nextIndex >= initialPokemons.length) return; // nothing left
        const pokemon = initialPokemons[nextIndex];
        const nextId = pokemons.length ? Math.max(...pokemons.map(p=>p.id)) + 1 : 1;
        setPokemons(prev => [...prev, { ...pokemon, id: nextId }]);
        setHasAnyAdded(true);
    };


    // removed old add form logic; handling now via handleAddExisting above

    const searching = filterType.trim() !== "" || levelFilter.trim() !== "";

    const styles = {
        filterBox: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px',
            background: '#f7f7f7',
            borderRadius: '8px',
            border: '1px solid #ddd',
            margin: '20px 0'
        },
        input: {
            padding: '8px 12px',
            width: '180px',
            borderRadius: '4px',
            border: '1px solid #ccc',
        },
        formInput: {
            padding: '8px 10px',
            width: '100%',
            borderRadius: '4px',
            border: '1px solid #bbb',
            boxSizing: 'border-box',
        },
        formLabel: {
            fontSize: '14px',
            marginBottom: '4px',
            color: '#333'
        },
        addButton: {
            padding: '10px 14px',
            fontWeight: 'bold',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '8px'
        },
        list: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
        },
        empty: {
            textAlign: 'center',
            color: '#666'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            maxWidth: '400px',
            margin: '20px auto',
            padding: '16px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            background: '#fafafa',
        },
        checkbox: {
            alignSelf: 'start'
        }
    };

    return (
        <div className="container">
            <BtnBack />
            <h2>Example 6: Condicional y Listas</h2>
            <h3>(Filtrado y alta de pok�mones)</h3>
            <p>Filtra por nombre/tipo o nivel, y agrega nuevos pok�mones.</p>

            <div style={styles.filterBox}>
                <select
                    value={filterType}
                    onChange={e => setFilterType(e.target.value)}
                    style={styles.input}
                >
                    <option value="">Todos los tipos</option>
                    {typeOptions.map(t => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
                <select
                    value={levelFilter}
                    onChange={e => setLevelFilter(e.target.value)}
                    style={styles.input}
                >
                    <option value="">Todos los niveles</option>
                    {levelOptions.map(l => (
                        <option key={l} value={l}>{l}</option>
                    ))}
                </select>
                <button
                    onClick={handleAddNext}
                    style={styles.addButton}
                    disabled={initialPokemons.length - pokemons.length === 0}
                >
                    {initialPokemons.length - pokemons.length > 0
                        ? `Agregar siguiente Pokémon (${initialPokemons.length - pokemons.length} restantes)`
                        : 'No hay más pokémones'}
                </button>
            </div>



            {(searching || hasAnyAdded) && (
                filtered.length > 0 ? (
                    <div style={styles.list}>
                        {filtered.map(p => (
                            <CardPokemon
                                key={p.id}
                                name={p.name}
                                type={p.type}
                                power={p.power}
                                level={p.level}
                                image={p.image}
                                legendary={p.legendary}
                            />
                        ))}
                    </div>
                ) : (
                    <p style={styles.empty}>
                        No se encontraron pok�mones que coincidan con los filtros.
                    </p>
                )
            )}
        </div>
    );
}

export default Example6CondicionalListas;
