import { useState } from "react";
import BtnBack from "../components/BtnBack";

function Example4StateHooks() {
    // Lista de Pokémon
    const pokemons = [
        { id: 1, name: "Pikachu", type: "Eléctrico", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
        { id: 2, name: "Charmander", type: "Fuego", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
        { id: 3, name: "Squirtle", type: "Agua", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
        { id: 4, name: "Bulbasaur", type: "Planta", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
        { id: 5, name: "Dragonite", type: "Dragón", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png" },
        { id: 6, name: "Mewtwo", type: "Psíquico", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png" },
        { id: 7, name: "Gyarados", type: "Agua", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png" },
        { id: 8, name: "Arcanine", type: "Fuego", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png" },
        { id: 9, name: "Alakazam", type: "Psíquico", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png" },
        { id: 10, name: "Gengar", type: "Fantasma", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png" },
        { id: 11, name: "Snorlax", type: "Normal", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png" },
        { id: 12, name: "Eevee", type: "Normal", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png" },    
        { id: 13, name: "Jigglypuff", type: "Normal/Hada", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png" },
        { id: 14, name: "Psyduck", type: "Agua", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png" },
        { id: 15, name: "Machamp", type: "Lucha", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png" },
        { id: 16, name: "Gardevoir", type: "Psíquico/Hada", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png" },
        { id: 17, name: "Lucario", type: "Lucha/Acero", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png" },
        { id: 18, name: "Tyranitar", type: "Roca/Siniestro", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png" },
        { id: 19, name: "Salamence", type: "Dragón/Volador", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png" },
        { id: 20, name: "Metagross", type: "Acero/Psíquico", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png" },
    ];

    const [pokemonActual, setPokemonActual] = useState(pokemons[0]);
    const [capturas, setCapturas] = useState(0);
    const [capturados, setCapturados] = useState([]);
    const [cargando, setCargando] = useState(false);

    const obtenerPokemonAleatorio = () => {
        setCargando(true);
        setTimeout(() => {
            const indiceAleatorio = Math.floor(Math.random() * pokemons.length);
            const elegido = pokemons[indiceAleatorio];
            setPokemonActual(elegido);
            setCapturas(prev => prev + 1);
            setCapturados(prev => [...prev, elegido]);
            setCargando(false);
        }, 3000);
    };

    const reiniciar = () => {
        setPokemonActual(pokemons[0]);
        setCapturas(0);
        setCapturados([]);
    };


    return (
        <div className="container">
            <BtnBack />
            <h2>Example 4: State Hooks</h2>
            <h3>(useState, useEffect)</h3>
            <p>Selecciona un Pokémon aleatorio</p>

            {/* Pokémon actual */}
            <div style={{
                textAlign: "center",
                padding: "30px",
                backgroundColor: "#f0f0f0",
                borderRadius: "10px",
                marginTop: "20px"
            }}>
                {cargando ? (
                    <div>
                        <div style={{ fontSize: "48px", marginBottom: "10px" }}></div>
                        <h3 style={{ color: "#4873c2" }}>Capturando...</h3>
                    </div>
                ) : (
                    <>
                        <img src={pokemonActual.image} alt={pokemonActual.name} style={{ maxWidth: "200px", marginBottom: "10px" }} />
                        <h3>{pokemonActual.name}</h3>
                        <p style={{ color: "#666" }}>Tipo: <strong>{pokemonActual.type}</strong></p>
                        <p style={{ color: "#999", fontSize: "14px" }}>ID: {pokemonActual.id}</p>
                        <p style={{ color: "#333", fontSize: "16px", marginTop: "8px" }}>Has capturado: <strong>{pokemonActual.name}</strong></p>
                        <p style={{ color: "#333", fontSize: "16px", marginTop: "4px" }}>Pokémon capturados: <strong>{capturas}</strong></p>
                    </>
                )}
            </div>


            <div style={{ marginTop: "20px", display: "flex", gap: "12px", justifyContent: "center" }}>
                <button
                    onClick={obtenerPokemonAleatorio}
                    disabled={cargando}
                    style={{
                        padding: "12px 30px",
                        fontSize: "16px",
                        backgroundColor: cargando ? "#cccccc" : "#ff6b6b",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: cargando ? "not-allowed" : "pointer",
                        fontWeight: "bold",
                        opacity: cargando ? 0.6 : 1
                    }}
                >
                    🔄capturar pokemon
                </button>
                <button
                    onClick={reiniciar}
                    style={{
                        padding: "12px 30px",
                        fontSize: "16px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    ↻ Reiniciar
                </button>
            </div>

            {/* pokémon capturados */}
            {capturados.length > 0 && (
                <div style={{ marginTop: "24px", textAlign: "center" }}>
                    <h3>Pokémon capturados</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginTop: "12px" }}>
                        {capturados.map((p, i) => (
                            <div key={i} style={{ width: "100px", textAlign: "center" }}>
                                <img src={p.image} alt={p.name} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }} />
                                <div style={{ fontSize: "12px", marginTop: "6px", color: "#333" }}>{p.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Example4StateHooks;