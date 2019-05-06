import React from 'react'
import withCounter from "./hoc/WithCounter";

const styles = {
    card: {
        display: 'flex',
        flex: '1 1 0',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inverted: {
        transform: 'rotate(180deg)',
    },
    center: {
        fontSize: '5rem'
    },
    button: {
        width: "100%",
        background: "transparent",
        border: "0",
        height: "60px",
        fontSize: "2rem",
        cursor: "pointer"
    }
};

const colors = [
    "#b5ffb3",
    "#ffb3be",
];

const Player = (props) => (
    <div style={{
        ...styles.card,
        ... { backgroundColor: colors[props.index]},
        ...(props.useMobileStyles && props.index === 0 ? styles.inverted : {})
    }}>
        <button onClick={props.onIncrement} data-cy="inc-1" style={styles.button}>
            <span role="img" aria-label="Plus">➕</span>
        </button>
        <div>
            <strong>Player: {props.playerName}</strong>
            <div style={styles.center} data-cy="val-1">
                {props.value}
            </div>
        </div>
        <button onClick={props.onDecrement} data-cy="dec-1" style={styles.button}>
            <span role="img" aria-label="Minus">➖</span>
        </button>
    </div>
);

export default withCounter(Player);