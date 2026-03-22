const sortedsquares = require('./sortedSquares');

describe('Sorted Squares Tests', () => {

    test('example1', () => {
        expect(sortedsquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
    });

    test('example2', () => {
        expect(sortedsquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
    });

    test('mixed values', () => {
        expect(sortedsquares([-5, -3, -2, -1])).toEqual([1, 4, 9, 25]);
    });

    test('empty array', () => {
        expect(sortedsquares([])).toEqual([]);
    });

    test('all positive values', () => {
        expect(sortedsquares([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
    });    

    test('single element', () => {
        expect(sortedsquares([-2])).toEqual([4]);
    });

    
});
