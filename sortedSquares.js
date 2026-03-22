function sortedSquares(arr) {
    let n = arr.length;
    let result = new Array(n);
    
    let left = 0;
    let right = n - 1;
    let pos = n - 1;

    while (left <= right) {
        let leftSq = arr[left] * arr[left];
        let rightSq = arr[right] * arr[right];

        if(leftSq > rightSq) {
            result[pos] = leftSq;
            left++;
        }else{
            result[pos] = rightSq;
            right--;
        }
        pos--;
    }
    return result;
}

module.exports = sortedSquares;