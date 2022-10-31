//Need to create a function that will get the scores from local storage and sort them by value and will display it on the scores page
function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    for (let i = 0; i < highscores.length; i += 1) {
        var listTag = document.createElement('li');
        listTag.textContent = highscores[i].initials + ' - ' + highscores[i].score;
        var oList = document.getElementById('highscores');
        oList.appendChild(listTag);
    }
}

function clearHighscores() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
}
document.getElementById('erase').onclick = clearHighscores;

printHighscores();