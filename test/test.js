describe('sumByFactors', function () {

    it('Should find all primes less than 7 returning 2,3,5,7 if 7 is passed in', function () {
        expect(findAllPrimes(7)).toEqual([2,3,5,7]);
    });
    it('Should find all primes less than 17 returning 2,3,5,7,11,13,17 if 17 is passed in', function () {
        expect(findAllPrimes(17)).toEqual([2,3,5,7,11,13,17]);
    });
    it('When given 45 should return all prime factors: [3,5]', function () {
        expect(combineAllPrimeFactorsIntoArray([45])).toEqual([[3,5]]);
    });
    it('When given 95 should return all prime factors: [5, 19]', function () {
        expect(combineAllPrimeFactorsIntoArray([95])).toEqual([[5,19]]);
    });
    it('When given 45, 95, 97, 12 should return all prime factors: ([ [ 3, 5 ], [ 5, 19 ], [ 97 ], [ 2, 3 ] ])', function () {
        expect(combineAllPrimeFactorsIntoArray([45,95, 97, 12])).toEqual([ [ 2, 3 ],[ 3, 5 ], [ 5, 19 ],[ 97 ] ]);
    });
    it('When given [ [ 3, 5 ] ] should return a flattened array: ([3,5])', function () {
        expect(flatten([ [ 3, 5 ] ])).toEqual([3,5]);
    });
    it('When given [ [ 3, 5 ], [ 5, 19 ], [ 97 ] ] should return a flattened array: ([ 3, 5, 19, 97 ])', function () {
        expect(flatten([ [ 3, 5 ], [ 5, 19 ], [ 97 ] ])).toEqual([ 3, 5, 19, 97 ]);
    });
    it('When given [45, 12] should the final answer: ([3, 57],[4, 12], [5, 45])', function () {
        expect(sumByFactors([45, 12])).toEqual([[2, 12],[3, 57], [5, 45]]);
    });
});

