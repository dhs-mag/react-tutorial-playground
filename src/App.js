import React, {Component} from 'react';
import Player from "./components/Player";
import StartScreen from "./components/StartScreen";
import GameBoard from "./components/GameBoard";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: [
                {
                    name: '',
                    hp: 0,
                },
                {
                    name: '',
                    hp: 0,
                }
            ],
            gameStarted: false
        };
    }

    handlePlayerChange = (playerIndex, parameterName, newValue) => {

        const newPlayers = this.state.players.slice();
        newPlayers[playerIndex][parameterName] = newValue;

        this.setState({
            players: newPlayers
        })
    };

    startGame = () => {
        this.setState({
            gameStarted: true
        })
    };

    backToStart = () => {
        this.setState({
            players: [
                {
                    name: '',
                    hp: 0,
                },
                {
                    name: '',
                    hp: 0,
                }
            ],
            gameStarted: false
        })
    };

    render() {

        if (this.state.gameStarted) {
            return <GameBoard backToStart={this.backToStart} players={this.state.players}/>;
        } else {
            return <StartScreen onPlayerChange={this.handlePlayerChange} players={this.state.players} startGame={this.startGame}/>;
        }
    }
}

export default App;
