describe('sumByFactors', function () {

    it('The sum of the digits in 39 when combined are divisible by 3. This should return false', function () {
        expect(returnFalseIfSumOfDigitsIsDivisibleByTree(39)).toEqual(false);
    });
    it('Should find all primes less than 7 returning 2,3,5,7 if 7 is passed in', function () {
        expect(findAllPrimes(7)).toEqual([2,3,5,7]);
    });
    it('Should find all primes less than 17 returning 2,3,5,7,11,13,17 if 17 is passed in', function () {
        expect(findAllPrimes(17)).toEqual([2,3,5,7,11,13,17]);
    });
    it('When given 45 should return all prime factors: [3,5]', function () {
        expect(sumByFactors(45)).toEqual([3,5]);
    });

});

