// 1. Salaire mensuel
let salaireMensuel = 500;

// 2. Loyer = 30% du salaire
let loyer = salaireMensuel * 0.30;
console.log(loyer);

// 3. Nourriture = 20% du salaire
let nourriture = salaireMensuel * 0.20;
console.log(nourriture);

// 4. Transport = 10% du salaire
let transport = salaireMensuel * 0.10;
console.log(transport);

// 5. Autres dépenses : initialisées à 50, on ajoute 25
let autresDepenses = 50 + 25;
console.log(autresDepenses);

// 6. Total des dépenses
let totalDepenses = loyer + nourriture + transport + autresDepenses;
console.log(totalDepenses);

// 7. Reste après dépenses
let reste = salaireMensuel - totalDepenses;
console.log(reste);

// Ecrivez votre code ici

// Ne pas modifier le code ci-dessous
module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
};
