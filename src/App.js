import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import Login from './components/Login';
import Main from './components/Main'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact={true} component={Login}></Route>
                        <Route path="/:kind" exact={true} component={Main}></Route>
                    </Switch>
                </BrowserRouter>
            </main>
        );
    }
}

export default App;
