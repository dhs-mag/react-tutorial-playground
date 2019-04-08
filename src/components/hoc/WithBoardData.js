import React from "react";

const WithBoardData = (Component) =>
    class HOC extends React.PureComponent {

        constructor(props) {
            super(props);

            const playerOneParams = props.p1.split('🎲');
            const playerTwoParams = props.p2.split('🎲');

            this.state = {
                p1: {
                    name: playerOneParams.length === 2 ? playerOneParams[0] : '',
                    hp: playerOneParams.length === 2 ? playerOneParams[1] : 20,
                },
                p2: {
                    name: playerTwoParams.length === 2 ? playerTwoParams[0] : '',
                    hp: playerTwoParams.length === 2 ? playerTwoParams[1] : 20,
                },
            }
        }

        render() {
            return <Component p1={this.state.p1} p2={this.state.p2} />
        }
    };

export default WithBoardData
