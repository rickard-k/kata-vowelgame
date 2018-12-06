function splinter(word1, word2) {
  const splitter1 = word1.match(/[aouei]/)[0];
  const splitter2 = word2.match(/[aouei]/)[0];
  const inter1 = word1.split(splitter1, 2);
  const inter2 = word2.split(splitter2, 2);
  const result1 = inter1[0] + splitter1 + inter2[1];
  const result2 = inter2[0] + splitter2 + inter1[1];
  return [result1, result2];
}

function transform(a, b) {
  const word1 = typeof a === 'string' ? a.toLowerCase() : a;
  const word2 = typeof b === 'string' ? b.toLowerCase() : b;
  if (/[^a-z]/.test(word1) || /[^a-z]/.test(word2) || typeof a !== 'string' || typeof b !== 'string') {
    throw new Error('Bad input. Please enter english letters only.');
  } else if (word1 === '' || word2 === '' || !/[aouei]/.test(word1) || !/[aouei]/.test(word2)) {
    return [word1, word2];
  } else {
    return splinter(word1, word2);
  }
}

module.exports.transform = transform;
