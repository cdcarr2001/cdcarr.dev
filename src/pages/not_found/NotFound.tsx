import type { ReactElement } from "react";
import { Link } from "react-router";
import './NotFound.css'

export default function NotFound(): ReactElement {

    return(
        <div
            id = 'not-found'
        >
            <h1>404: Page not found</h1>
            <p>Click <Link to = '/'>here</Link> to return home</p>
        </div>
    );
}