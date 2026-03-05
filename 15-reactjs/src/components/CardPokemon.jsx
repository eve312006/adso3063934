import './CardPokemon.css'

function CardPokemon({ name, type, power, level, image, legendary = false }) {

    const typeColors = {
        electric: '#F8D030',
        grass: '#78C850',
        fire: '#F08030',
        water: '#6890F0',
        psychic: '#F85888',
        ice: '#98D8D8',
    }


    return (
        <div className='pokemon-card' style={{borderColor: typeColors[type?.toLowerCase()] || '#ccc' }}>
            {image && <img src={image} alt={name} className='pokemon-image' />}
            <h3>{name}</h3>
            <p className='pokemon-type'>Type: {type}</p>
            <p className='pokemon-power'>Power: {power}</p>
            {level !== undefined && <p className='pokemon-level'>Level: {level}</p>}
            {legendary && <span className='legendary-badge'>🎇 Legendary 🎇</span>}
        </div>
    )
}

export default CardPokemon;
