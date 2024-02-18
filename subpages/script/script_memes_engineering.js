const memeImages = [
    '../src/Electrical_Engineering/Flyback_Diode.jpg',
    '../src/Electrical_Engineering/Fourier.jpg',
    '../src/Electrical_Engineering/Statistics.jpg',
    '../src/Electrical_Engineering/Tweet.jpg'
    // Füge hier weitere Bild-URLs hinzu, falls benötigt
];

let currentMemeIndex = 0;

function showNextMeme() {
    currentMemeIndex = (currentMemeIndex + 1) % memeImages.length;
    document.getElementById('memeImage').src = memeImages[currentMemeIndex];
}

function showPreviousMeme() {
    currentMemeIndex = (currentMemeIndex - 1 + memeImages.length) % memeImages.length;
    document.getElementById('memeImage').src = memeImages[currentMemeIndex];
}

function goToSubpage() {
    window.location.href = 'subpage_memes_main.html'; // Ändere dies zu der gewünschten Subpage-URL
}