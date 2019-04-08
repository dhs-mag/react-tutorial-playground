import React from 'react';
import Board from "./components/Board";
import StartScreen from "./components/StartScreen";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

const App = () =>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={StartScreen}/>
            <Route path="/board/:playerOne/:playerTwo" render={(props) =>
                <Board
                    p1={props.match.params.playerOne}
                    p2={props.match.params.playerTwo}
                />}
            />
            <Route
                render={() =>{
                    console.log('redirect');
                    return (<Redirect to="/"/>)}}
            />
        </Switch>
    </BrowserRouter>;

export default App;
