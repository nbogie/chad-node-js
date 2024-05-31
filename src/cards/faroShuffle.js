let stack1 = createCards(1, 26);
let stack2 = createCards(27, 52);

let shuffledDeck = performFaroShuffle(stack1, stack2);

logCardInPosition(1, shuffledDeck);
logCardInPosition(2, shuffledDeck);
logCardInPosition(3, shuffledDeck);
logCardInPosition(50, shuffledDeck);
logCardInPosition(51, shuffledDeck);
logCardInPosition(52, shuffledDeck);

function logCardInPosition(position, deck) {
    const card = deck[position - 1];
    console.log("At position ", position, " is ", card);
}

function createCards(startNum, endNum) {
    const cards = [];
    for (let i = startNum; i <= endNum; i++) {
        const card = i;
        cards.push(card);
    }
    return cards;
}

function performFaroShuffle(stackA, stackB) {
    const resultingDeck = [];
    let index = 0;
    while (index < stackA.length) {
        const leftCard = stackA[index];
        const rightCard = stackB[index];

        index = index + 1;
        resultingDeck.push(leftCard);
        resultingDeck.push(rightCard);
    }
    return resultingDeck;
}
