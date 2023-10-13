let equipemancheAttaque = 0;
let equipemancheDefense = 0;
// let Joueur = {
//   init: function (nom, typEquipe) {
//     this.nom = nom + " (" + typEquipe + ")";
//   },
// };
let joueurs = ["Cypher", "Omen", "Phoenix", "Astra", "Killjoy"];
let equipes = ["Attaquant", "Defenseur"];
// let joueurs = [];

let joueurEquipeAttaque = joueurs[Math.floor(Math.random() * joueurs.length)];
let equipeAttaque = equipes[Math.floor(Math.random() * equipes.length)];

// histoire que tout le monde participe
console.log(joueurs.indexOf(joueurEquipeAttaque));
joueurs.splice(joueurs.indexOf(joueurEquipeAttaque), 1);

let joueurEquipeDefense = joueurs[Math.floor(Math.random() * joueurs.length)];
let equipeDefense = equipes.find((equipe) => equipe !== equipeAttaque);

let resultat =
  joueurEquipeAttaque +
  " de l'équipe " +
  equipeAttaque +
  " contre " +
  joueurEquipeDefense +
  " de l'équipe " +
  equipeDefense;

console.log(resultat);

while (equipemancheAttaque <= 13 || equipemancheDefense <= 13) {
  let equipeAleatoire = equipes[Math.floor(Math.random() * equipes.length)];
  let joueurAleatoire = joueurs[Math.floor(Math.random() * joueurs.length)];

  let joueurMort = "";
  let action = "";

  if (Math.random() < 0.6) {
    joueurMort = "défenseur";
    action = "amorce le spike";
  } else {
    joueurMort = "attaquant";
    action = "tue son adversaire";
  }

  if (Math.random() < 0.7 && action === "amorce le spike") {
    action += ", l'attaquant l'emporte sur le défenseur";
  } else {
    action += ", duel équilibré";
  }

  console.log(joueurAleatoire + " de " + equipeAleatoire + " " + action);

  if (equipeAleatoire === "Attaquant") {
    equipemancheAttaque++;
  } else {
    equipemancheDefense++;
  }
}

console.log("Fin de la partie !");

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
