
// Themes

    // Load the theme everytime the page loads
    window.onload = loadTheme('#');

    // Gets the desired theme from the dropdown (This is the onclick event for applying theme)
    function getTheme() {
        const theme = document.getElementById('toggleTheme').value;

        toggleTheme(theme);
    }

    // This is the defining of the themes and colours       // Although a little more complex I liked the idea of having the JavaScript do the heavy lifting for themes
    function toggleTheme(theme) { 
        const root = document.querySelector(':root').style;

        // Light
        if (theme === 'Light') {

            root.setProperty('--background', 'aliceblue');
            root.setProperty('--mainColour', 'black');
            root.setProperty('--secondary', 'wheat');
            root.setProperty('--tertiary', '#999');
            root.setProperty('--contrast', '#333');
            root.setProperty('--p1', 'rgb(162, 162, 212)')
            root.setProperty('--p2', 'rgb(151, 212, 156)')
            root.setProperty('--p1Secondary', 'rgb(52, 92, 150)')
            root.setProperty('--p2Secondary', 'rgb(29, 80, 13)')

        // Dark
        } else if (theme === 'Dark') {

            root.setProperty('--background', 'black');
            root.setProperty('--mainColour', 'aliceblue');
            root.setProperty('--secondary', '#333');
            root.setProperty('--tertiary', '#666');
            root.setProperty('--contrast', 'wheat');

        // Red
        } else if (theme === 'Red') {

            root.setProperty('--background', 'darkred');
            root.setProperty('--mainColour', 'aliceblue');
            root.setProperty('--secondary', 'rgb(190, 14, 14)');
            root.setProperty('--tertiary', 'rgb(225, 149, 24)');
            root.setProperty('--contrast', 'wheat');
            
        // Blue
        } else if (theme === 'Blue') {

            root.setProperty('--background', 'lightblue');
            root.setProperty('--mainColour', 'black');
            root.setProperty('--secondary', 'rgb(152, 194, 241)');
            root.setProperty('--tertiary', 'rgb(148, 148, 255)');
            root.setProperty('--contrast', 'darkblue');
            root.setProperty('--p1', 'rgb(162, 162, 212)')
            root.setProperty('--p2', 'rgb(151, 212, 156)')
            root.setProperty('--p1Secondary', 'rgb(52, 92, 150)')
            root.setProperty('--p2Secondary', 'rgb(29, 80, 13)')

        }

        // Saves theme to localStorage
        localStorage.setItem('theme', theme);

        // Updates the dropdown to be correct
        document.getElementById('toggleTheme').value = theme;
    };

    // Loads the theme from storage and sets Light as default if no theme set
    function loadTheme() {
        let theme = localStorage.getItem('theme') || 'Light';

        toggleTheme(theme);

        console.log('Theme loaded!');
    }

/*  */