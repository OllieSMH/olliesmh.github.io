
// Go to page buttons
// Changes page instead of using standard <a> elements to keep theme (This is the onclick function for each page button)     // As mentioned, I prefer to have JavaScript do the heavy lifting
function pageChanger(pageName) {
    goToPage(pageName);
    loadTheme();
}

// Switching pages to desired file
function goToPage(pageName) {
    console.log('Navigating to:', pageName);
    window.location.href = pageName;
}

function external(pageName) {
    window.open(pageName, '_blank');
}

//Sounds

// Maow sound effect (This is the onclick event for the welcome page)
function maow() {
    const audio = document.getElementById('maow');

    audio.volume = 0.3;

    audio.play();

    audio.addEventListener('ended', function() {
        pageChanger('resume.html');

        console.log("Loading page...");
    });
}
































// Shhhh Secrets Below!
let count = 0;

function magicLoop() {
    console.log("YOU DIDN'T SAY THE MAGIC WORD!");
    setTimeout(magicLoop, 1000);
}

function nope() {
    alert("AH AH AH YOU DIDN'T SAY THE MAGIC WORD!");
    const secretImg = document.getElementById('secretImg');

    secretImg.src = 'images/dennisJurassicPark.gif';
    secretImg.alt = "AH AH AH YOU DIDN'T SAY THE MAGIC WORD!";

    const audio = document.getElementById('magicWord');

    if (count >= 900) {
        audio.currentTime = 0;
        count = 0;
        
    } else{
        magicLoop();
        
        count++;
    }

    audio.volume = 0.3;

    audio.play();
}

function hmm() {
    alert("It's not that easy to find me :3");
}

function secret1(pageName) {
    const audio = document.getElementById('maow');

    audio.volume = 0.07;

    audio.play();

    audio.addEventListener('ended', function() {
        pageChanger(pageName);

        console.log("Loading secret...");
    });
}

if (window.location.href.includes('secret.html')) {
    loadTheme();
    window.alert("I've trapped you on this secret page! Find me and I'll let you go!");
}

function escape() {
    alert("Congratulations! You found me :3!");

    secret1('home.html');
}

