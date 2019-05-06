import React from 'react'
import Player from "./Player";
import {Link} from "react-router-dom";


const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flex: '1 1 0',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mobileContainer: {
        flexDirection: 'column',
    },
    floatButton: {
        position: 'fixed',
        fontSize: '2.5rem',
        left: 1,
        top: '50%',
        marginTop: '-1.75rem',
        zIndex: 2,
        textDecoration: 'none',
        background: "transparent",
        border: "0",
        padding: 0
    }
};

const GameBoard = (props) => (
    <div style={props.useMobileStyles ? {...styles.container, ...styles.mobileContainer} : styles.container}>
        <Link style={styles.floatButton} to={{
            pathname: "/",
            state: null
        }}>
            <span role="img" aria-label={"Back button"}>🔙</span>
        </Link>

        {props.players.map((p, index) => <Player playerName={p.name} playerInitialHp={p.hp} key={index} index={index} useMobileStyles={props.useMobileStyles}/>)}
    </div>
);

export default GameBoard