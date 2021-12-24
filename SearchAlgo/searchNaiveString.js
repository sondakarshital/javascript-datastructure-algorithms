function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (short.length - 1 == j) count++;
    }
  }
  return count;
}

console.log(naiveSearch('its rocking rock', 'rock'));
