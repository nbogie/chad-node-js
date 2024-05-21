//This import statement makes the lodash utility library available for later use.
import lodash from "lodash";

//Here are three arrays of strings: nouns, verbs, and adjectives
const nouns = [
    "barbarian",
    "bard",
    "cleric",
    "druid",
    "fighter",
    "monk",
    "paladin",
    "ranger",
    "rogue",
    "sorcerer",
    "warlock",
    "wizard",
];
const verbs = [
    "attacks",
    "kills",
    "pummels",
    "blesses",
    "charms",
    "disarms",
    "saves",
];
const adjectives = ["strong", "agile", "noble", "stealthy", "masterful"];

//We'll use the "sample" function from the lodash library to pick a word from each word array at random.
const chosenNoun1 = lodash.sample(nouns);
const chosenNoun2 = lodash.sample(nouns);
const chosenVerb = lodash.sample(verbs);
const chosenAdjective = lodash.sample(adjectives);

//Here, we log out a silly sentence, composed of our randomly-selected words
console.log(
    "The",
    chosenNoun1,
    chosenVerb,
    "the",
    chosenAdjective,
    chosenNoun2,
);
