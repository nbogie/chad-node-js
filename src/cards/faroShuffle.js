let stack1 = createCards(1, 26);
let stack2 = createCards(27, 52);

let shuffledDeck = performFaroShuffle(stack1, stack2);

let firstCard = logCardInPosition(1, shuffledDeck);
