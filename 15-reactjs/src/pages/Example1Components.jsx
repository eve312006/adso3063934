import BtnBack from "../components/BtnBack";

//
function Charmander() {
    return(
        <div style={{border:"4px solid orange", padding:"1.4rem", borderRadius:"0.3rem", backgroundColor:"rgba(232, 146, 42, 0.6)", width:"360px"}}>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="Charmander" style={{width: '140px', justifyContent: 'center', display: 'block', margin: '0 auto'}}/>
            <h2>🔥 Charmander</h2>
            <p>Type: Fire</p>
            <p>Ability: Blaze</p>
        </div>
    ) 
}

function Squirtle() {
    return(
        <div style={{border:"4px solid blue", padding:"1.4rem", borderRadius:"0.3rem", backgroundColor:"rgba(47, 122, 219, 0.6)", width:"360px"}}>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" alt="Charmander" style={{width: '140px', justifyContent: 'center', display: 'block', margin: '0 auto'}}/>
            <h2>💧 Squirtle</h2>
            <p>Type: Water</p>
            <p>Ability: Torrent</p>
        </div>
    ) 
}

function Raichu() {
    return(
        <div style={{border:"4px solid yellow", padding:"1.4rem", borderRadius:"0.3rem", backgroundColor:"rgba(241, 239, 97, 0.6)", width:"360px"}}>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png" alt="Charmander" style={{width: '140px', justifyContent: 'center', display: 'block', margin: '0 auto'}}/>
            <h2>⚡ Raichu</h2>
            <p>Type: Electric</p>
            <p>Ability: static</p>
        </div>
    ) 
}

function Example1Components() {
    return(
        <div className="container">
            <BtnBack />
            <h2>Example 1: Components</h2>
            <p>Create Independent a reusable UI Pieces</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.4rem', gap: '1rem', color: '#142157' }}>
                <Charmander/>
                <Squirtle/>
                <Raichu/>
            </div> 
        </div>
    )
}

export default Example1Components;