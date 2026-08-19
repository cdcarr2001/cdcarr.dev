import type { ReactElement } from "react";

import './Home.css'
import info from '@config/info_config.json'

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
                {SELF_INFORMATION}
            </div>
        </div>
    );
}

const SELF_INFORMATION = 
    "I am a well rounded developer with experience with a variety of frameworks and languages. " + 
    "Second linehajkfjksdhfjkhasdfljhasdljkfhjkashdfkjhasdfkjsshdgfjkhsdkjfghskdjhfgkjhhaskjdfhaskljdhfkjashdfkjahsfdjkhasdjfhlakshfdjkashdfkjhsadfkjh"