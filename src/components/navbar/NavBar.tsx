import type { ReactElement } from "react";
import { NavLink } from "react-router";
import ToggleDarkMode from "./components/ToggleDarkMode";

import './NavBar.css'
import info from '@config/info_config.json'

export default function NavBar(): ReactElement {

    return(
        <nav
            id='navbar'
        >
            <div
                id='name'
            >
                {`${info.name.first} ${info.name.last}`}
            </div>
            <ul
                id = 'navlinks'
            >
                <li><NavLink to='/' className='navlink'>Home</NavLink></li>
                <li><NavLink to='/projects' className='navlink'>Projects</NavLink></li>
                <li><NavLink to='/about' className='navlink'>About</NavLink></li>
                <li><NavLink to='/contact' className='navlink'>Contact</NavLink></li>
            </ul>
            <div
                id='navtoggles'
            >
                <ToggleDarkMode/>
            </div>
        </nav>
    );
}