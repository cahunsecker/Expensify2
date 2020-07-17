import React from 'react';
import {Link, BrowserRouter, NavLink, Switch } from 'react-router-dom';



const Header = () => (
    <header>
        <h1>MIS Track</h1>
        <h3>See where you're at, and where you're going</h3>
        <NavLink to="/">Home -</NavLink>
        <NavLink to="/skills"> Skills Page</NavLink>
    </header>
)

export default Header;