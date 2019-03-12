import React from "react";
import Player from "./Player";

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
};

class Board extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        }
    }

    getStyles = () => this.state.isMobile ? {...styles.container, ...styles.mobileContainer} : styles.container;


    getInvertedStyles = () => this.state.isMobile ? styles.inverted : {};

    render() {
        return (
            <>
                <div style={this.getStyles()}>
                    <Player
                        id={'1'}
                        name={this.props.playerOne.name}
                        hp={this.props.playerOne.hp}
                        styles={this.getInvertedStyles()}
                        color={'#44ff3f'}
                    />
                    <Player
                        id={'2'}
                        name={this.props.playerTwo.name}
                        hp={this.props.playerTwo.hp}
                        color={'#ff546c'}
                    />
                </div>
            </>
        )
    }
}

export default Board
