var users = [
    {
        nom: "GUELLATI",
        age: 22,
        note: 15,
    },
    {
        nom: "Mahmoud",
        age: 18,
        note: 11,
    },
    {
        nom: "Selma",
        age: 17,
        note: 15,
    },
    {
        nom: "Hamid",
        age: 17,
        note: 9,
    },
]

for (let i = 0; i < users.length; i++) {
    if (users[i].note >= 10 && users[i].note < 12) {
        users[i].specialite = "GAT - ST";
    }
    else if (users[i].note >= 12 && users[i].note < 15) {
        users[i].specialite = "GAT - ST - MI";
    }
    else if (users[i].note >= 15) {
        users[i].specialite = "GAT - ST - MI - ESI";
    }
    else {
        users[i].specialite = "Non Admis"
    }
}

console.log(users);