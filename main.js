let equipemancheAttaque = 0;
let equipemancheDefense = 0;

let joueurs = ["Cypher", "Omen", "Phoenix", "Astra", "Killjoy"];
let equipes = ["Attaquant", "Defenseur"];

while (equipemancheAttaque < 13 && equipemancheDefense < 13) {
  let equipeAttaquanteJoueurs = Array.from(joueurs);
  let equipeDefenseJoueurs = Array.from(joueurs);

  while (
    equipeAttaquanteJoueurs.length > 0 &&
    equipeDefenseJoueurs.length > 0
  ) {
    let equipeAleatoire = equipes[Math.floor(Math.random() * equipes.length)];
    let joueurAleatoire =
      equipeAleatoire === "Attaquant"
        ? equipeAttaquanteJoueurs[
            Math.floor(Math.random() * equipeAttaquanteJoueurs.length)
          ]
        : equipeDefenseJoueurs[
            Math.floor(Math.random() * equipeDefenseJoueurs.length)
          ];

    let joueurMort = "";
    let action = "";

    if (Math.random() < 0.6) {
      joueurMort = "défenseur";
      action = "amorce le spike";
    } else {
      joueurMort = "attaquant";
      action = "tue son adversaire";
    }

    if (Math.random() < 0.7 && action.includes("amorce le spike")) {
      action += ", l'attaquant l'emporte sur le défenseur";
    } else {
      action += ", 50/50 duel nul";
    }

    console.log(joueurAleatoire + " de " + equipeAleatoire + " " + action);

    if (equipeAleatoire === "Attaquant") {
      equipeAttaquanteJoueurs.splice(
        equipeAttaquanteJoueurs.indexOf(joueurAleatoire),
        1
      );
    } else {
      equipeDefenseJoueurs.splice(
        equipeDefenseJoueurs.indexOf(joueurAleatoire),
        1
      );
    }
  }

  if (equipeAttaquanteJoueurs.length === 0) {
    console.log(
      "L'équipe des attaquants a été éliminée. Les défenseurs gagnent cette manche !"
    );
    equipemancheDefense++;
  } else {
    console.log(
      "L'équipe des défenseurs a été éliminée. Les attaquants gagnent cette manche !"
    );
    equipemancheAttaque++;
  }
}

if (equipemancheAttaque === 13) {
  console.log(
    "L'équipe des attaquants a remporté 13 manches et et a marbré les défenseurs !"
  );
} else if (equipemancheDefense === 13) {
  console.log(
    "L'équipe des défenseurs a remporté 13 manches et a marbré les attaquants !"
  );
} else {
  console.log("La partie s'est terminée sans gagnant.");
}

console.log("Fin de game !");

// for (let i = 0; i <= 2; i++) {
//   let nom = equipe[Math.floor(Math.random() * equipe.length)];
//   let typEquipe = typEquipes[Math.floor(Math.random() * typEquipes.length)];
//   let joueur = Object.create(Joueur);
//   joueur.init(nom, typEquipe);
//   joueurs.push(joueur);
// }

// console.log(`${joueur.nom}`);
// let rand1 = Math.floor(Math.random() * equipe1.length);
// let rjoueur1 = equipe1[rand1];
// console.log("joueur de l'equipe 1: " + rjoueur1);

// let equipe2 = ["Cypher", "Omen", "Phoenix", "Astra", "Killjoy"];
// let rand2 = Math.floor(Math.random() * equipe2.length); // un peu degueu de faire ça mais bon
// let rand3 = Math.floor(Math.random() * equipe2.length);
// let rjoueur2 = equipe2[rand3];
// console.log("jouer de l'equipe 2: " + rjoueur2);

// equipe1 = "Defenseur";
// equipe2 = "Attaquant";

// while (equipe1manche <= 13 || equipe2manche <= 13) {
//   equipe1manche++;
//   // let equipes = [equipe1, equipe2];
//   // let rand = Math.floor(Math.random() * equipes.length);
//   // console.log(rjoueur1 + "des" + equipes + "s'en va pour marbrer" + rjoueur2);

//   let rValue = equipes[rand];
//   console.log(rValue);
//   if ((rValue = "Defenseur")) {
//     chance = 0.6;
//   } else if ((rValue = "Attaquant")) {
//     chance = 0.4;
//   }
//   console.log(chance);
// }
