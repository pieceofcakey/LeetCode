/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
  const rowsNeeded = rowIndex + 1;

  let rows = [];

  rows.push([1]);
  if (rowsNeeded == 1) {
    return rows[rowIndex];
  }

  rows.push([1, 1]);
  if (rowsNeeded == 2) {
    return rows[rowIndex];
  }

  for (let r = 2; r < rowsNeeded; r++) {
    let prevRow = rows[r - 1];
    let newRow = [];

    newRow.push(1);

    for (let j = 0; j < prevRow.length - 1; j++) {
      newRow.push(prevRow[j] + prevRow[j + 1]);
    }

    newRow.push(1);

    rows.push(newRow);
  }

  return rows[rowIndex];
};
