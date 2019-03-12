import React from 'react'
import Button from "./Button";
import withCounter from "./hoc/WithCounter";

const styles = {
    card: {
        display: 'flex',
        flex: '1 1 0',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    center: {
        fontSize: '5rem'
    }
};

const Player = (props) => (
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         counter: parseInt(props.hp)
    //     }
    // }

    // increment = () => {
    //     this.setState(prevState => ({counter: prevState.counter +1}))
    // };
    //
    // decrement = () => {
    //     this.setState(prevState => ({counter: prevState.counter -1}))
    // };

            <div style={{...styles.card,...props.styles, backgroundColor: props.color}}>
                <Button onClick={props.onIncrement} icon={'➕'} data-cy={'inc_'+props.id} />
                <span data-cy={"name_"+props.id}>{props.name}</span>
                <div style={styles.center} data-cy={'val_'+props.id}>{props.value}</div>
                <Button onClick={props.onDecrement} icon={'➖'} data-cy={'dec_'+props.id} />
            </div>
);


export default withCounter(Player)
