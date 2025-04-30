export function makeShelf(numRows, numCols) {
    /*
    Input: numRows, numCols 
    Returns: an array of arrays with dimensions numRows by numCols
    */
    var shelf = [];
    for (var i = 0; i < numCols; i++) {
        shelf[i] = [];
        for (var j = 0; j < numRows; j++) {
            shelf[i][j] = [i,j];
        }
    }
    return shelf;
}

export function sortAlpha(arr) {
    /*
    Input: array of part objects
    Return: sorted array of parts by name, alphabetical
    */
    var namesAlpha = [];
    // Store part names in namesAlpha
    for (var idx = 0; idx < arr.length; idx++) {
        namesAlpha[idx] = arr[idx].name;
    }
    // Sort by alpha
    return namesAlpha.sort();
}