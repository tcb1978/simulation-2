import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './auth_logo.png';
import './Main.css';

class Main extends Component {

    constructor() {
        super()
        this.state = {
            shelves: []
        }
    }

    componentDidMount() {
        // axios.get()
        this.setState({

        })
    }

    render() {
        return (
            <div className="home-center-page">
                <a href="/" className="logo"><img src={logo} className="App-logo" alt="logo" /></a>
                <Route path="/" />
                <section className="Form__Auth">
                    <label className="form-element label open-sans-bold">Username</label>
                    <input className="form-element input dark_green_border Auth__input" type="text"></input>
                    <label className="form-element label open-sans-bold">Password</label>
                    <input className="form-element input dark_green_border Auth__input" type="text"></input>
                </section>
                <section>
                    <button className="btn buttonLightGreen">Login</button>
                    <button className="btn buttonDarkGreen">Register</button>
                </section>
            </div>
        );
    }
}

export default Main;