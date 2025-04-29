// Make shelf array with dimensions numRows by numCols
export function makeShelf(numRows, numCols) {
    var shelf = [];
    for (var i = 0; i < numCols; i++) {
        shelf[i] = [];
        for (var j = 0; j < numRows; j++) {
            shelf[i][j] = [i,j];
        }
    }
    return shelf;
}