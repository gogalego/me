import React, { Component } from 'react';
import './style.css';

class Header extends Component {


    render() {
        return (
            <header >

                <h1 style={{ color: 'black' }}>Hi!<span>I'm Gonçalo Galego</span></h1>
                <h2>Trust me</h2>
                <a style={{ backgroundColor: 'black', color: '#6c757d' }}><i className="fas fa-caret-down"></i></a>
   
            </header>
        );
    }

    componentDidMount() {
        this.setState({ show: true });
    }

}

export default Header;
