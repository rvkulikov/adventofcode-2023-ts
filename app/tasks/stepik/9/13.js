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


let result = [];
for (team of teams) {
    let erangelDamage = 0;
    let erangelFrags = 0;
    let miramarDamage = 0;
    let miramarFrags = 0;
    let erangel;
    let miramar;
    for (player of team.players) {
        if (player.zone === 'Erangel') {
            erangelDamage += player.damage;
            erangelFrags += player.frags;
        }

        if (player.zone === 'Miramar') {
            miramarDamage += player.damage;
            miramarFrags += player.frags;
        }
        erangel = erangelDamage / erangelFrags;
        miramar = miramarDamage / miramarFrags;
    }
    result.push()
    console.log(erangel, miramar)
    console.log(123)
}
