import type { ReactElement } from "react";

import './Home.css';
import info from '@config/info_config.json';

// TODO document

export default function Home(): ReactElement {

    return(
        <div
            id="home"
        >
            <div
                id="intro-header"
            >
                Hello, I'm {info.name.first}!
            </div>
            <div
                id="home-picture"
            >
                picture here!
            </div>
            <div
                id="information-section"
            >
                {info.shortDesc}
            </div>
        </div>
    );
}