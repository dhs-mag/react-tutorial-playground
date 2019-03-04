import React from 'react'
import Button from "./Button";

const styles = {
    card: {
        // height: '100%',
        // width: '100%',
        display: 'flex',
        flex: '1 1 0',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    center: {
        // textAlign: 'center',
        fontSize: '5rem'
    }
};

class Player extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            counter: parseInt(props.hp)
        }
    }

    increment = () => {
        this.setState(prevState => ({counter: prevState.counter +1}))
    };

    decrement = () => {
        this.setState(prevState => ({counter: prevState.counter -1}))
    };

    render() {
        return (
            <div style={{...styles.card,...this.props.styles, backgroundColor: this.props.color}}>
                <Button onClick={this.increment} icon={'➕'} />
                <span>{this.props.name}</span>
                <div style={styles.center}>{this.state.counter}</div>
                <Button onClick={this.decrement} icon={'➖'} />
            </div>
        )
    }
}

export default Player
