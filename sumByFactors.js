function sumByFactors(number){
    for(var i in number)
    var primes = findAllPrimes(number);
    return findPrimeFactors(number, primes);

}

function findAllPrimes(number){
    primes = [2,3,5];
    for (var i = 5; i <= number; i++){
        if(returnTrueIfAPrime(primes, i)){
            primes.push(i);
        }
    }
    return primes;
}

function returnTrueIfAPrime (primes, i){
    return (i % 2 !== 0 && returnFalseIfSumOfDigitsIsDivisibleByTree(i) && i % 5 !== 0 && i % 3 !== 0 && returnTrueIfNotDivisibleByOtherPrimes(primes, i));
}


function returnFalseIfSumOfDigitsIsDivisibleByTree(i){
    var tempNumber = i;
    var sum = 0;
    while(tempNumber){
        sum += tempNumber % 10;
        tempNumber = Math.floor(tempNumber/10)
    }
    return (sum % 3 !== 0)

}

function returnTrueIfNotDivisibleByOtherPrimes(arrayOfPrimes, numberToCheck){
    for (var i in arrayOfPrimes){
        if(numberToCheck % arrayOfPrimes[i] === 0){
            return false;
        }
    }
    return true;
}


function findPrimeFactors(number, primes){
    var primeFactors = [];
    for (var i in primes){
        if(number % primes[i] === 0){
            primeFactors.push(primes[i]);
        }
    }
    console.log(primeFactors);
    return primeFactors;
}

sumByFactors(45);
//returnIfPrime(7);