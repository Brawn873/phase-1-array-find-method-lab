// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ]


// function superbowlWin(record) {
//     const winObject = record.find(obj => obj.result === "W");
//     return winObject ? winObject.year : undefined;
//   }

//   const result = superbowlWin(record);
//   console.log(result);

function superbowlWin(record) {
    const winningYear = record.find(entry => entry.result === "W");
  
    if (winningYear) {
      return winningYear.year;
    } else {
      return undefined;
    }
  }

  // Example usage:
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
  ];
  
  const result = superbowlWin(record);
  console.log(result); 