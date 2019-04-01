import React from "react";
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
    inverted: {
        transform: 'rotate(180deg)',
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
    }
};

class Board extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isMobile: !window.matchMedia("(min-width: 769px)").matches,
            playerOne: {
                name: '',
                hp: 20,
            },
            playerTwo: {
                name: '',
                hp: 20,
            },
        };

        if (props.location.state && props.location.state.playerOne){
            this.state = {
                ...this.state,
                playerOne: props.location.state.playerOne
            }
        }

        if (props.location.state && props.location.state.playerTwo){
            this.state = {
                ...this.state,
                playerTwo: props.location.state.playerTwo
            }
        }

    }

    getStyles = () => this.state.isMobile ? {...styles.container, ...styles.mobileContainer} : styles.container;


    getInvertedStyles = () => this.state.isMobile ? styles.inverted : {};

    render() {
        return (
            <>
                <Link style={styles.floatButton} to={{
                    pathname: "/",
                    state: null
                }}>
                    <span role="img" aria-label={"Back button"}>🔙</span>
                </Link>
                <div style={this.getStyles()}>
                    <Player
                        id={'1'}
                        name={this.state.playerOne.name}
                        hp={this.state.playerOne.hp}
                        styles={this.getInvertedStyles()}
                        color={'#44ff3f'}
                    />
                    <Player
                        id={'2'}
                        name={this.state.playerTwo.name}
                        hp={this.state.playerTwo.hp}
                        color={'#ff546c'}
                    />
                </div>
            </>
        )
    }
}

export default Board
