import type { ReactElement } from "react";

import './ExternalLink.css';

// TODO document

export default function ExternalLink(
    props: ExternalLinkProps
): ReactElement {

    var siteImage: ReactElement;

    switch (props.site) {

        case ('github'): {

            siteImage = (
                <>
                    <img className='link-image lightmode' src='/site_logos/github_light.svg'/>
                    <img className='link-image darkmode' src='/site_logos/github_dark.svg'/>
                </>
            );
        }
    }

    return(
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            {siteImage}
        </a>
    );
}

type ExternalLinkProps = {

    link: string,
    site: 'github', // Add more as necessary
}