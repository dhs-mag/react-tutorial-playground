import React, {Component} from 'react';
import Board from "./components/Board";
import StartScreen from "./components/StartScreen";

const styles = {
    floatButton: {
        position: 'fixed',
        fontSize: '2.5rem',
        left: 1,
        top: '50%',
        marginTop: '-1.75rem',
        zIndex: 2,
        cursor: 'pointer',
    }
};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialized: false,
            data: {}
        }
    }

    onInitialized = (data) => {
        this.setState({
            initialized: true,
            data: data
        })
    };

    renderScreen = () => {
        if (this.state.initialized) {
            return (
                <>
                    <div style={styles.floatButton} onClick={this.handleBack}>🔙</div>
                    <Board playerOne={this.state.data.playerOne} playerTwo={this.state.data.playerTwo}/>
                </>
            )
        } else {
            return <StartScreen onSubmit={this.onInitialized}/>
        }
    };

    handleBack = () => {
        this.setState({
            initialized: false
        })
    };

    render() {
        return (
            <>
                {this.renderScreen()}
            </>
        );
    }
}

export default App;
