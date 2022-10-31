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