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
            <img
                id="home-picture"
                src='/home/home_self_picture.png'
            />
            <div
                id="information-section"
            >
                <p>
                    {info.shortDesc}
                </p>
            </div>
        </div>
    );
}