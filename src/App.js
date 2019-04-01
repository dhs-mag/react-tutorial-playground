import React, {Component} from 'react';
import Player from "./components/Player";
import PlayerForm from "./components/PlayerForm";

const styles = {
    container: {
        display: 'flex',
        padding: '2em',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center"
    },
};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            hp: 0,
        }
    }

    handleInputChange = (e) => {
        let inputName = e.target.name;
        this.setState({
            [inputName]: e.target.value
        })
    };

    render() {
        return (
            <div style={styles.container}>
                <PlayerForm onInputChange={this.handleInputChange}/>
                <Player/>
            </div>
        );
    }
}

export default App;
