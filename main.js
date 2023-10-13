// initialisation
let equipemancheAttaque = 0;
let equipemancheDefense = 0;

let joueurs = ["Cypher", "Omen", "Phoenix", "Astra", "Killjoy"];
let equipes = ["Attaquant", "Defenseur"];

//Tant que des deux equipes n'a pas 13 manches gagnées
while (equipemancheAttaque < 13 && equipemancheDefense < 13) {
  let equipeAttaquanteJoueurs = Array.from(joueurs);
  let equipeDefenseJoueurs = Array.from(joueurs);

  // condition de victoire et de défaite
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

    // si le joueur mort est défenseur : 60% de chance d’amorcer le spike,si le joueur mort est attaquant, 40% de chance.
    if (Math.random() < 0.6) {
      joueurMort = "défenseur";
      action = "amorce le spike";
    } else {
      joueurMort = "attaquant";
      action = "tue son adversaire";
    }

    // si le spike est amorcé, 70% de chance que lors d’un duel, l’attaquant l’emporte sur le défenseur, donc 30% pour le défenseur de tuer.
    if (Math.random() < 0.7 && action.includes("amorce le spike")) {
      action += ", l'attaquant l'emporte sur le défenseur";
    } //si le spike n’est pas amorcé, 50% de chance pour chaque duel.
    else {
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
  // Une manche est terminée lorsqu’il ne reste plus que des joueurs d’une même équipe.Condition d'élimination d'une des deux equipes
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

// Insertion du score final
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
