// Задача: https://stepik.org/lesson/1025984/step/13?auth=login&unit=1034244

let teams = [
    {
        "name": "Team A", "players": [{
            "name": "Player 1", "damage": 1500, "frags": 8, "zone": "Erangel"
        }, {
            "name": "Player 2", "damage": 1200, "frags": 5, "zone": "Miramar"
        }, {
            "name": "Player 3", "damage": 1800, "frags": 6, "zone": "Erangel"
        }]
    }, {
        "name": "Team B", "players": [{
            "name": "Player 4", "damage": 1000, "frags": 4, "zone": "Miramar"
        }, {
            "name": "Player 5", "damage": 2000, "frags": 7, "zone": "Erangel"
        }]
    }
];

const groupBy = function(arr, key) {
    return arr.reduce((x, y) => {
        (x[y[key]] = x[y[key]] || []).push(y);
        return x;
    }, {});
}


let res = {};
teams.forEach((t) => {
    const groups = groupBy(t.players,'zone');

    res[t.name] = {};

    for (const [zoneName, players] of Object.entries(groups)) {
        const damage = players.map((p) => p.damage).reduce((a, b) => a + b, 0);
        const frags = players.map((p) => p.frags).reduce((a, b) => a + b, 0);
        const dpf = parseFloat((damage / frags).toFixed(2));

        (res[t.name] || {})[zoneName] = dpf;
    }
});

console.log(res);
