import { useState, useEffect, useCallback } from 'react';
import BtnBack from '../components/BtnBack';

const POKEMONS_PER_PAGE = 20;
const TOTAL_POKEMONS = 1302; // Límite actual de la PokeAPI

function Example8DataFetching() {
    const [items, setItems] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selected, setSelected] = useState(null);

    // Función principal de carga (Memoizada para evitar re-renders infinitos)
    const fetchPokemons = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMONS_PER_PAGE}&offset=${offset}`);
            if (!res.ok) throw new Error("Error al obtener los datos");
            const data = await res.json();
            setItems(data.results);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [offset]);

    useEffect(() => {
        fetchPokemons();
    }, [fetchPokemons]);

    const fetchDetails = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setSelected(data);
        } catch (err) {
            console.error("Error en detalles", err);
        }
    };

    const extractId = url => url.split('/').filter(Boolean).pop();

    // Lógica de Paginación
    const goToNext = () => {
        if (offset + POKEMONS_PER_PAGE < TOTAL_POKEMONS) setOffset(offset + POKEMONS_PER_PAGE);
    };
    const goToPrev = () => {
        if (offset > 0) setOffset(offset - POKEMONS_PER_PAGE);
    };

    return (
        <div className="pokedex">
            <style>{`
                .pokedex-wrapper { max-width: 1100px; margin: 0 auto; padding: 20px; font-family: 'Segoe UI', sans-serif; }
                .pokedex-header { text-align: center; margin-bottom: 30px; }
                .pokedex-title { color: #ff0000; font-size: 2.5rem; text-transform: uppercase; letter-spacing: 2px; }
                
                /* Layout */
                .pokedex-layout { display: grid; grid-template-columns: 1fr 350px; gap: 25px; }
                
                /* Grid y Cards */
                .pk-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 15px; }
                .pk-card { background: #f8f9fa; border-radius: 12px; padding: 10px; text-align: center; cursor: pointer; border: 2px solid transparent; transition: 0.2s; }
                .pk-card:hover { border-color: #ff0000; background: #fff; transform: scale(1.05); }
                .pk-card img { width: 80px; height: 80px; }
                .pk-card h4 { font-size: 0.9rem; text-transform: capitalize; margin: 8px 0; }

                /* Paginación */
                .pagination-ctrl { display: flex; justify-content: center; align-items: center; gap: 20px; margin-top: 30px; background: #333; padding: 15px; border-radius: 50px; color: white; }
                .pg-btn { background: #ff0000; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold; }
                .pg-btn:disabled { background: #666; cursor: not-allowed; }

                /* Panel Lateral */
                .pk-details-sticky { position: sticky; top: 20px; background: #fff; border: 4px solid #333; border-radius: 15px; padding: 20px; text-align: center; min-height: 400px; box-shadow: 10px 10px 0px #eee; }
                .pk-details-image { width: 200px; background: #f2f2f2; border-radius: 50%; margin-bottom: 15px; }
                .type-label { display: inline-block; padding: 5px 15px; border-radius: 20px; color: white; font-weight: bold; margin: 5px; font-size: 0.8rem; text-transform: uppercase; background: #777; }
                
                @media (max-width: 850px) {
                    .pokedex-layout { grid-template-columns: 1fr; }
                    .pk-details-sticky { position: relative; top: 0; margin-bottom: 20px; }
                }
            `}</style>

            <BtnBack />

            <header className="pokedex-header">
                <h2 className="pokedex-title">World Pokédex</h2>
                <p>Mostrando {offset + 1} - {Math.min(offset + POKEMONS_PER_PAGE, TOTAL_POKEMONS)} de {TOTAL_POKEMONS} registros</p>
            </header>

            <div className="pokedex-layout">
                {/* Lado Izquierdo: Lista con Paginación */}
                <main>
                    {loading ? (
                        <div className="pk-grid">
                            {[...Array(20)].map((_, i) => <div key={i} className="pk-card" style={{height: '140px', opacity: 0.5}}>Cargando...</div>)}
                        </div>
                    ) : error ? (
                        <div className="error-msg">{error}</div>
                    ) : (
                        <div className="pk-grid">
                            {items.map(p => {
                                const id = extractId(p.url);
                                return (
                                    <div key={id} className="pk-card" onClick={() => fetchDetails(p.url)}>
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={p.name} />
                                        <h4>{p.name}</h4>
                                        <small style={{color: '#999'}}>#{id}</small>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    <nav className="pagination-ctrl">
                        <button className="pg-btn" onClick={goToPrev} disabled={offset === 0}>Anterior</button>
                        <span>Página {Math.floor(offset / POKEMONS_PER_PAGE) + 1}</span>
                        <button className="pg-btn" onClick={goToNext} disabled={offset + POKEMONS_PER_PAGE >= TOTAL_POKEMONS}>Siguiente</button>
                    </nav>
                </main>

                {/* Lado Derecho: Detalles Fijos */}
                <aside>
                    <div className="pk-details-sticky">
                        {selected ? (
                            <div>
                                <img 
                                    className="pk-details-image" 
                                    src={selected.sprites.other['official-artwork'].front_default || selected.sprites.front_default} 
                                    alt={selected.name} 
                                />
                                <h2 style={{textTransform: 'capitalize'}}>{selected.name}</h2>
                                <p><strong>ID:</strong> {selected.id}</p>
                                
                                <div>
                                    {selected.types.map(t => (
                                        <span key={t.type.name} className="type-label" style={{background: getTypeColor(t.type.name)}}>
                                            {t.type.name}
                                        </span>
                                    ))}
                                </div>

                                <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '20px'}}>
                                    <div><strong>Altura</strong><br/>{selected.height / 10}m</div>
                                    <div><strong>Peso</strong><br/>{selected.weight / 10}kg</div>
                                </div>

                                <h4 style={{marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '10px'}}>Estadísticas</h4>
                                {selected.stats.map(s => (
                                    <div key={s.stat.name} style={{fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between', padding: '2px 0'}}>
                                        <span style={{textTransform: 'capitalize'}}>{s.stat.name}</span>
                                        <strong>{s.base_stat}</strong>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{paddingTop: '100px'}}>
                                <p style={{color: '#999'}}>Selecciona un Pokémon para ver sus detalles básicos y estadísticas.</p>
                            </div>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );
}

// Helper para colores de tipos
function getTypeColor(type) {
    const colors = {
        fire: '#F08030', grass: '#78C850', water: '#6890F0', bug: '#A8B820', 
        normal: '#A8A878', electric: '#F8D030', ground: '#E0C068', fairy: '#EE99AC',
        fighting: '#C03028', psychic: '#F85888', rock: '#B8A038', ghost: '#705898',
        ice: '#98D8D8', dragon: '#7038F8', steel: '#B8B8D0', poison: '#A040A0'
    };
    return colors[type] || '#777';
}

export default Example8DataFetching;