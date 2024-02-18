const memeImages = [
    '../src/Other_Memes/Benedryl-Fandersnatch.jpg',
    '../src/Other_Memes/ironman.jpg',
    '../src/Other_Memes/isitcake.jpg',
    '../src/Other_Memes/Benneypop-Cabbagepatch.jpg',
    '../src/Other_Memes/Tru.jpg',
    '../src/Other_Memes/dumbledore.jpeg',
    '../src/Other_Memes/flowers.jpeg',
    '../src/Other_Memes/food.jpeg',
    '../src/Other_Memes/future.jpeg',
    '../src/Other_Memes/power.jpeg'
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