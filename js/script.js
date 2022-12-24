

var usersDb = [
    {
        email: "pabette25@gmail.com",
        mdp: 123456,
    },
    {
        email: "m.a.guellati@gmail.com",
        mdp: 1234567,
    },
    {
        email: "guellati.med.amine@gmail.com",
        mdp: 12345678,
    }
]

let inputEmail = "guellati.med.amine@gmail.com";
let inputMdp = 1234568;


function emailChecker(inputEmail, inputMdp) {

    var emailFound
    var mdpFound


    for (let i = 0; i < usersDb.length; i++) {

        if (inputEmail == usersDb[i].email) {

            emailFound = usersDb[i].email;
            mdpFound = usersDb[i].mdp;
        }
    }


    if (!emailFound) {
        alert("le email n'existe pas");
    }
    else {

        if (inputMdp == mdpFound) {
            alert("le mdp est correct")
        }
        else {
            alert("le mdp est incorrect")
        }
    }
}

emailChecker(inputEmail, inputMdp);

