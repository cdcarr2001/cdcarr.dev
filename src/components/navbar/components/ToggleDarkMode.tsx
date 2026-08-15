import { useEffect, useRef, useState, type ReactElement } from "react";

export default function ToggleDarkMode(): ReactElement {

    /** The current color theme */
    const colorTheme = useRef<string>(getColorTheme());
    /** The current icon */
    const [ icon, setIcon ] = useState<string>(colorTheme.current === 'dark' ? '⏾' : '☀︎');

    /**
     * Toggle the current site color theme
     */
    const toggleMode = (): void => {

        /** New color theme */
        colorTheme.current = colorTheme.current === 'dark' ? 'light' : 'dark';

        // Set new color theme
        document.documentElement.setAttribute('data-theme', colorTheme.current);
        // Save new color theme
        localStorage.setItem('color-theme', colorTheme.current);
        // Update icon
        setIcon(colorTheme.current === 'dark' ? '⏾' : '☀︎');
    };


    useEffect(() => {

        document.documentElement.setAttribute('data-theme', colorTheme.current);
    }, []);

    return(
        <button
            id='dark-mode-toggle'
            onClick={toggleMode}
        >
            <text>
                {icon}
            </text>
        </button>
    );
}

/**
 * Get the color theme to set the page to
 * @returns 'dark' or 'light' depending on saved/preferred theme
 */
function getColorTheme(): string {

    /** Color theme saved to local storage (if any) */
    let savedColorTheme: string | null = localStorage.getItem('color-theme');

    // If there was a saved color theme, return it
    if (savedColorTheme) {

        return(savedColorTheme);
    }
    // Otherwise get and return the preferred color theme
    else {

        return(window.matchMedia('(prefers-color-theme: dark').matches ? 'dark' : 'light');
    }


}