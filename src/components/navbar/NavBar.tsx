import { useEffect, type ReactElement } from "react";
import './NavBar.css'
import { NavLink } from "react-router";
import ToggleDarkMode from "./components/ToggleDarkMode";

export default function NavBar(): ReactElement {

    useEffect(() => {

        console.log('rendered nav bar!')
    }, [])

    return(
        <nav
            id='navbar'
        >
            <div
                id='name'
            >
                Connor Carr
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