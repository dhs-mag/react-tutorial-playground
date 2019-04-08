import React from "react";
import {Link} from "react-router-dom";

const styles = {
    container: {
        display: 'flex',
        padding: '2em',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: "wrap",
    },
    formContainer: {
        padding: '2em 0',
    },
    label: {
        display: "block",
        margin: "0.3em 0"
    },
    input: {
        textAlign: "center",
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid lightgray",
    },
    tab: {
        display: 'flex',
        flexDirection: 'column',
        border: "3px solid lightgray",
        borderRadius: "5px",
        textAlign: "center",
        margin: "1em",
        padding: '3em 4em',
    },
    tabHeader: {
        textAlign: "center",
    },
    button: {
        display: 'block',
        margin: '0 auto',
        width: '120px',
        textAlign: "center",
        background: "#81b2ff",
        border: "1px solid #6565FF",
        padding: '1em',
        fontSize: '2rem',
        textDecoration: 'none',
        borderRadius: "5px",
        color: "white",
        textTransform: "uppercase"
    },
    heading: {
        textAlign: 'center',
    }

};

const CustomForm = (props) => (
    <div style={styles.formContainer}>
        <label style={styles.label}>{props.label}</label>
        <input
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            style={styles.input}
            {...props}
        />
    </div>
);

class StartScreen extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            playerOne: {
                name: '',
                hp: 20,
            },
            playerTwo: {
                name: '',
                hp: 20,
            },
        }
    }

    handleStateChange = (key, attr) => (e) => {
        e.persist();
        this.setState(prevState => ({
            [key]: {
                ...prevState[key],
                [attr]: e.target.value
            }
        }))
    };

    getUrlToBoard(){
        return `/board/${this.state.playerOne.name}🎲${this.state.playerOne.hp}/${this.state.playerTwo.name}🎲${this.state.playerTwo.hp}`;
    }

    render() {
        return (
            <>
                <div style={styles.heading}>
                    <h1>Super Ultra HP Counter</h1>
                    <span>(such wow)</span>
                </div>
                <div style={styles.container}>
                    <div style={{...styles.tab, borderColor: "#44ff3f", background: "#b5ffb3"}}>
                        <h2 style={styles.tabHeader}>Player One</h2>
                        <CustomForm
                            data-cy={'player_1_name'}
                            label={'Name:'}
                            type={'text'}
                            value={this.state.playerOne.name}
                            onChange={this.handleStateChange('playerOne', 'name')}
                        />
                        <CustomForm
                            data-cy={'player_1_hp'}
                            label={'HP:'}
                            type={'number'}
                            value={this.state.playerOne.hp}
                            onChange={this.handleStateChange('playerOne', 'hp')}
                        />
                    </div>
                    <div style={{...styles.tab, borderColor: "#ff546c", background: "#ffb3be"}}>
                        <h2>Player Two</h2>
                        <CustomForm
                            data-cy={'player_2_name'}
                            label={'Name:'}
                            type={'text'}
                            value={this.state.playerTwo.name}
                            onChange={this.handleStateChange('playerTwo', 'name')}
                        />
                        <CustomForm
                            data-cy={'player_2_hp'}
                            label={'HP:'}
                            type={'number'}
                            value={this.state.playerTwo.hp}
                            onChange={this.handleStateChange('playerTwo', 'hp')}
                        />
                    </div>
                </div>
                <Link to={{
                    pathname: this.getUrlToBoard(),
                }}
                      style={styles.button}
                      role='img'
                      aria-label='play button'>
                    Start <span role="img" aria-label={"Start game"}>🎮</span>
                </Link>
            </>
        )
    }
}

export default StartScreen
