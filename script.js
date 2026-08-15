let count = 0;
let score = 0;
let timerId = 0;

function startGame() {
    count = 0;
    score = 0;
    gameLoop();
}

function gameLoop() {
    const gamezone = document.getElementById("gamezone");
    
    gamezone.innerHTML = "";
    for (let i = 0; i < 8; i++) {
        const char = document.createElement("div");
        char.className = "character characterVisible";
        char.innerHTML = "character " + (i + 1);
        
        char.onclick = function() {
            score -= 2;
        };
        
        gamezone.appendChild(char);
    }

    const randomNum = Math.floor(Math.random() * 8);
    const target = gamezone.children[randomNum];

    target.className = "character characterVisible naruto";
    target.innerHTML = "Лишний";

    target.onclick = function(e) {
        e.stopPropagation();
        score++;
        clearTimeout(timerId);
        nextTurn();
    };

    count++;
    timerId = setTimeout(nextTurn, 500);
}

function nextTurn() {
    if (count < 12) {
        gameLoop();
    } else {
        alert("Игра окончена! Ваш счет: " + score);
    }
}
