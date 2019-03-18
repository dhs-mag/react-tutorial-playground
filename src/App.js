import React from 'react';
import Board from "./components/Board";
import StartScreen from "./components/StartScreen";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) =>
    <BrowserRouter>
        <Route path="/" exact component={StartScreen}/>
        <Route path="/board" component={Board}/>
    </BrowserRouter>;

export default App;
