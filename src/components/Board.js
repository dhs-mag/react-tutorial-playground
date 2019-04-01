import React from "react";
import Player from "./Player";
import {Link, Redirect} from "react-router-dom";

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
            redirect: false,
            playerOne: {
                name: '',
                hp: 20,
            },
            playerTwo: {
                name: '',
                hp: 20,
            },
        };

        let params = new URLSearchParams(props.location.search);
        let player = {
            one: null,
            two: null
        };

        try{
            player.one = JSON.parse(params.get("playerOne"));
            player.two = JSON.parse(params.get("playerTwo"));
        } catch (e) {
            this.state.redirect = true;
        }

        if (Board.isValidParamJSON(player.one)){
            this.state = {
                ...this.state,
                playerOne: player.one
            }
        } else {
            this.state.redirect = true;
        }

        if (Board.isValidParamJSON(player.two)){
            this.state = {
                ...this.state,
                playerTwo: player.two
            }
        } else {
            this.state.redirect = true;
        }
    }

    static isValidParamJSON(json){
        return json !== null && json.name !== undefined && json.hp !== undefined;
    }

    getStyles = () => this.state.isMobile ? {...styles.container, ...styles.mobileContainer} : styles.container;


    getInvertedStyles = () => this.state.isMobile ? styles.inverted : {};

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    };

    render() {
        return (
            <>
                {this.renderRedirect()}
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
                        cy='player-2'
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
