let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(wordsList, expression) {
  return wordsList.filter(key => expression.test(key));
}

console.log(allMatches(words, /lab/));