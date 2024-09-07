let players = [
    {"name": "Player 1", "frags": 10, "damage": 2000, "timeInZone": 20},
    {"name": "Player 2", "frags": 5, "damage": 1500, "timeInZone": 15},
    {"name": "Player 3", "frags": 5, "damage": 1700, "timeInZone": 30},
    {"name": "Player 4", "frags": 5, "damage": 1800, "timeInZone": 20}
];

let result = [];

function Game(players) {
    this.players = players;

    this.mostDamage = function () {
        let a = [];

        for (let player of players) {
            a.push(player.damage)
        }

        return Math.max(...a);
    }

    this.calculatePlayerStats = function () {
        let averageDamagePerFrag;
        let zoneTimeToFragRatio;
        let rating;

        for (let player of players) {
            averageDamagePerFrag = player.damage / player.frags;
            zoneTimeToFragRatio = player.timeInZone / player.frags;
            rating = (player.frags * 2) + (averageDamagePerFrag * 5) - zoneTimeToFragRatio;

            player.averageDamagePerFrag = averageDamagePerFrag;

            if (player.damage === this.mostDamage()) {
                player.mostDamagePlayer = true;
            }

            player.zoneTimeToFragRatio = zoneTimeToFragRatio;
            player.rating = rating;
        }
        return players;
    }
}

let pubg = new Game(players);
result = pubg.calculatePlayerStats();
