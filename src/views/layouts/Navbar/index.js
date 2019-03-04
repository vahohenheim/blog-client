import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/1">Article</Link>
            </li>
        </ul>
    </nav>
)

export default Navbar
