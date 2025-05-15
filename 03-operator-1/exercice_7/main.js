// 1. Âge de l'enfant
let ageEnfant = 10;

// 2. Âge du père = double de l'enfant
let agePere = ageEnfant * 2;
console.log(agePere);

// 3. Âge de la mère = âge du père - 5
let ageMere = agePere - 5;
console.log(ageMere);

// 4. Âge du grand-père = double de la mère + moitié de l'enfant
let ageGrandPere = (ageMere * 2) + (ageEnfant / 2);
console.log(ageGrandPere);

// 5. Âge de l'oncle = âge du père + 10
let ageOncle = agePere + 10;
console.log(ageOncle)
// Ecrivez votre code ici

// Ne pas modifier le code ci-dessous
module.exports = {
  ageEnfant,
  agePere,
  ageMere,
  ageGrandPere,
  ageOncle,
};
