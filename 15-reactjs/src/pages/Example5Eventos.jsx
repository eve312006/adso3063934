import { useState, useEffect } from "react";
import BtnBack from "../components/BtnBack";

function Example5Eventos() {
    const [chosenPokemon, setChosenPokemon] = useState(null);
    const [hoveredPokemon, setHoveredPokemon] = useState(null);

    // Event (Click)
    const handleChoice = (name) => {
        setChosenPokemon(name)
    }

    // Event (Hover: MouseEnter || MouseOver)
    const handleMouseEnter = (nome) => {
        setHoveredPokemon(null)
    }

    // Event (MouseLeave)
    const handleMouseLeave = () => {
        setHoveredPokemon(null)
    }

    const buttonStyle = {
        background: 'transparent',
        color: 'white',
        cursor: 'pointer',
        padding: '0.9rem',
        marginTop: '1rem',
        borderRadius: '50px',
        border: '2px solid white',
        transition: 'all 0.4s ease',
        fontWeight: 'bold'

    }

    // Styles 
    const style = {

        content: {
            background: 'rgba(255, 248, 240, 0.2)',
            borderRadius: '0.5rem',
            border: '2px solid #e8f5e8',
            padding: '1rem',
            marginTop: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },

        buttons: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem'
        },

        title: {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: '1rem',
            color: '#fff',
            borderBottom: '3px dashed #e8f5e8',
            paddingBottom: '0.5rem'
        },

        message: {
            background: 'rgba(255, 215, 0, 0.2)',
            width: '30%',
            textAlign: 'center',
            justifyContent: 'center',
            padding: '1rem',
            borderRadius: '0.5rem',
            marginTop: '1rem',
            border: '2px solid #FFD700',
            color: '#FFD700',
            fontWeight: 'bold',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    }


    return (
        <div className="container">
            <BtnBack />
            <h2>Example 5: Event Handling</h2>
            <h3>(Event Handling in React)</h3>
            <p>Respond to user interactions (click, hover, input, submit).</p>

            <div style={style.content}>
                <h3 style={style.title}>Click Event</h3>

                <div style={style.buttons}>
                    <button onClick={(e) => handleChoice('Pikachu', e)} style={buttonStyle}>
                        <span style={{ zoom: 1.2 }}>⚡</span> Pikachu
                    </button>

                    <button onClick={(e) => handleChoice('Charmander', e)} style={buttonStyle}>
                        <span style={{ zoom: 1.2 }}>🔥</span> Charmander
                    </button>

                    <button onClick={(e) => handleChoice('Squirtle', e)} style={buttonStyle}>
                        <span style={{ zoom: 1.2 }}>💧</span> Squirtle
                    </button>
                </div>

                <div style={style.message}>
                    {chosenPokemon ? (
                        <div>You choose: {chosenPokemon}!</div>
                    ) : (
                        <div>Please choose a pokemon!</div>
                    )
                    }
                </div>

                {/* MouseEnter / MouseLeave - Event */}
                <div>
                    <h3 style={style.title}>MouseEnter / MouseLeave Event</h3>

                    <div style={style.buttons}>
                        <button  style={buttonStyle}  >
                            
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Example5Eventos;