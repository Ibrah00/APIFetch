import React from 'react';
import youtubesearch from './YoutubeSearch';

import { BrowserRouter, Route, Link } from 'react-router-dom';


function Nav(){
    return (
        <nav className="nav1">
            <h3>Youtube API Fetch </h3>
                <ul className="inner">
                    <Link to='/youtubesearch'> 
                        <li>Random</li>
                    </Link>
                    <Link to='/search'>
                        <li>Search</li>
                    </Link>
                </ul>
        </nav>
    );
}

export default Nav;