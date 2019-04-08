import React from "react";
import Player from "./Player";
import {Link} from "react-router-dom";
import WithBoardData from "./hoc/WithBoardData";

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
        }
    }

    getStyles = () => this.state.isMobile ? {...styles.container, ...styles.mobileContainer} : styles.container;

    getInvertedStyles = () => this.state.isMobile ? styles.inverted : {};

    render() {
        const {p1, p2} = this.props;
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
                        name={p1.name}
                        hp={p1.hp}
                        styles={this.getInvertedStyles()}
                        color={'#44ff3f'}
                        cy='player-2'
                    />
                    <Player
                        id={'2'}
                        name={p2.name}
                        hp={p2.hp}
                        color={'#ff546c'}
                    />
                </div>
            </>
        )
    }
}

export default WithBoardData(Board)
