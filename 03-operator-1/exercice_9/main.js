// Valeur totale du patrimoine
const maison = 60000000;
const terrains = 40000000;
const liquidites = 20000000;
const totalHeritage = maison + terrains + liquidites;

// Répartition des parts
const partEnfants = totalHeritage * 0.75; // 75% pour les enfants
const partParEnfant = partEnfants / 3;

const paul = partParEnfant;
const marie = partParEnfant;
const partAlain = partParEnfant;
const eric = partAlain / 2;
const clair = partAlain / 2;

const partConjointEtFreres = totalHeritage * 0.25; // 25%
const partParAdulte = partConjointEtFreres / 3;

const madameMukuna = partParAdulte;
const joseph = partParAdulte;
const sarah = partParAdulte;

// Affichage
console.log("Répartition de l'héritage de Monsieur Jean MUKUNA :\n");
console.log("Paul : " + paul.toLocaleString() + " CDF");
console.log("Marie : " + marie.toLocaleString() + " CDF");
console.log("Éric : " + eric.toLocaleString() + " CDF");
console.log("Claire : " + clair.toLocaleString() + " CDF");
console.log("Madame MUKUNA : " + madameMukuna.toLocaleString() + " CDF");
console.log("Joseph : " + joseph.toLocaleString() + " CDF");
console.log("Sarah : " + sarah.toLocaleString() + " CDF");

// Ne pas modifier le code ci-dessous
module.exports = {
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah,
};

