function competitionRank(rankObject, candidateArray) {
  let records = Object.entries(rankObject);
  let map = new Map();
  for (let i = 0; i < records.length; i++) {
    map.set(records[i][0], records[i][1]);
  }
  const mapSort = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  var keyArray = Array.from(mapSort.keys());
  var valueArray = Array.from(mapSort.values());
  let rankArray = [1];
  let rank = 1;
  for (let i = 1; i < valueArray.length; i++) {
    if (valueArray[i] < valueArray[i - 1]) {
      rank++;
      rankArray.push(rank);
    } else {
      rankArray.push(rank);
    }
  }
  let result = [];
  for (let i = 0; i < candidateArray.length; i++) {
    result.push(rankArray[keyArray.indexOf(candidateArray[i])]);
  }
  return result;
}
console.log(
  competitionRank(
    {
      Susan: 93,
      Jane: 89,
      Brett: 82,
      George: 96,
      Emily: 95,
    },
    ["George", "Brett", "Susan"]
  )
);
competitionRank(
  {
    Kate: 92,
    Carol: 92,
    Jess: 92,
    Bruce: 92,
    Scott: 92,
  },
  ["Bruce", "Kate", "Jess", "Scott"]
);