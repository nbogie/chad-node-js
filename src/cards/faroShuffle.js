let stack1 = createCards(1, 26);
let stack2 = createCards(27, 52);

let result = performFaroShuffle(stack1, stack2);

logCardInPosition(1, result);
