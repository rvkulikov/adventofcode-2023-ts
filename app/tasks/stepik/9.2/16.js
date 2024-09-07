// Задача: https://stepik.org/lesson/1025984/step/16?auth=login&unit=1034244

let teams = [{
    "name": "Team A",
    "players": [
        {"name": "Player 1", "damage": 1500, "frags": 8, "healing": 200, "revives": 22},
        {"name": "Player 2", "damage": 1200, "frags": 5, "healing": 150, "revives": 21},
        {"name": "Player 3", "damage": 1800, "frags": 6, "healing": 100, "revives": 13}]
},
    {
        "name": "Team B",
        "players": [
            {"name": "Player 4", "damage": 1000, "frags": 4, "healing": 400, "revives": 32},
            {"name": "Player 5", "damage": 1500, "frags": 7, "healing": 550, "revives": 21},
            {"name": "Player 6", "damage": 1500, "frags": 2, "healing": 650, "revives": 21}]
    }]

let result = [];

function Game(teams) {
    this.teams = teams;

    this.findPlayerWithMaxHealing = function () {

    }

    this.findTeamWithMaxStats = function () {

    }

    this.calculateTeamEfficiency = function () {

    }

    this.calculateTeamStats = function () {

    }

    // Общий метод для объединения результатов
    this.calculateStats = function () {
        console.log(this.findPlayerWithMaxHealing())
    }
}

let pubg = new Game(teams);
result = pubg.calculateStats();
