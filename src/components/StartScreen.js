import React from "react";

const styles = {
    container: {
        display: 'flex',
        padding: '2em',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    formContainer: {
        padding: '2em 0',
    },
    tab: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1em',
    },
    button: {
        display: 'block',
        margin: '0 auto',
        width: '120px',
        textAlign: "center",
        background: "#81b2ff",
        border: 0,
        borderRadius: 0,
        boxShadow: 'none',
        padding: '1em',
        cursor: 'pointer',
        fontSize: '2rem',
    }
};

const CustomForm = (props) => (
    <div style={styles.formContainer}>
        <div>{props.label}</div>
        <input
            type={props.type}
            value={props.value}
            onChange={props.onChange}
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
        this.setState(prevState =>({
            [key]: {
                ...prevState[key],
                [attr]: e.target.value
            }
        }))
    };

    submit = () => {
        this.props.onSubmit(this.state)
    };

    render() {
        return (
            <>
            <div style={styles.container}>
                <div style={styles.tab}>
                <h2>Player One</h2>
                <CustomForm
                    label={'Enter player 1 name'}
                    type={'text'}
                    value={this.state.playerOne.name}
                    onChange={this.handleStateChange('playerOne', 'name')}
                />
                <CustomForm
                    label={'Enter player 1 hp'}
                    type={'number'}
                    value={this.state.playerOne.hp}
                    onChange={this.handleStateChange('playerOne', 'hp')}
                />
                </div>
                <div style={styles.tab}>
                <h2>Player Two</h2>
                <CustomForm
                    label={'Enter player 2 name'}
                    type={'text'}
                    value={this.state.playerTwo.name}
                    onChange={this.handleStateChange('playerTwo', 'name')}
                />
                <CustomForm
                    label={'Enter player 2 hp'}
                    type={'number'}
                    value={this.state.playerTwo.hp}
                    onChange={this.handleStateChange('playerTwo', 'hp')}
                />
                </div>
            </div>
            <span onClick={this.submit} style={styles.button} role='img' aria-label='play button'>Play 🎮</span>
        </>
        )
    }
}

export default StartScreen
