// JavaScript-Funktion, die aufgerufen wird, wenn der Button geklickt wird
function toggleGIF() {
    // Verändere den Text des Buttons und zeige/verstecke den Container mit dem GIF und den Verlinkungen
    var button = document.querySelector('button');
    var gifContainer = document.getElementById('gifContainer');


    if (button.innerText === 'Pause') {
        button.innerText = 'Genug Kraft getankt?';
        gifContainer.style.display = 'block';
    } else {
        button.innerText = 'Pause';
        gifContainer.style.display = 'none';
    }
}