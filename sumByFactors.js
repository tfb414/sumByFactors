function sumByFactors(number) {
    var arrayOfPrimeFactors = flatten(combineAllPrimeFactorsIntoArray(number));
    return finalAnswer(arrayOfPrimeFactors, number);


}
function combineAllPrimeFactorsIntoArray(number){
    var arrayOfPrimeFactors = [];

    number = highest(number);
    var primes = findAllPrimes(number[0]);
    for(var i in number){
        arrayOfPrimeFactors.push(findPrimeFactors(number[i], primes));

    }
    return arrayOfPrimeFactors.sort(function(a,b){return (a - b)});

}
function highest(number){
    return [].slice.call(number).sort(function(a,b){
        return Math.abs(b)-Math.abs(a);
    });
}


function findAllPrimes(number){
    var primes = [2,3,5];
    for (var i = 5; i <= Math.abs(number); i++){
        if(returnTrueIfNotDivisibleByOtherPrimes(primes, i)){
            primes.push(i);
        }
    }

    return primes;
}


function returnTrueIfNotDivisibleByOtherPrimes(arrayOfPrimes, numberToCheck){
    for (var i in arrayOfPrimes){
        if(numberToCheck % arrayOfPrimes[i] === 0){
            return false;
        }
        if(Math.abs(numberToCheck) < Math.abs(arrayOfPrimes[i])){
            return true;
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
        if(Math.abs(number) < Math.abs(primes[i])){
            break;
        }
    }
    return primeFactors;
}
function flatten(arrayOfPrimeFactors){
    var flattenedArray = [];
    for(var i in arrayOfPrimeFactors){
        while(arrayOfPrimeFactors[i].length > 0) {
            flattenedArray.push(arrayOfPrimeFactors[i][0]);
            arrayOfPrimeFactors[i].shift();

        }
    }

    return removeDuplicatesFromArray(flattenedArray);
}

function removeDuplicatesFromArray(flattenedArray){
    flattenedArray.sort(function(a,b){return (a - b)})
    var nonDuplicates = [];
    for(var i in flattenedArray){
        var iPlusOne = parseInt(i)+1;
        if(flattenedArray[i] !== flattenedArray[iPlusOne]){
            nonDuplicates.push(flattenedArray[i]);
        }
    }
    return nonDuplicates;

}




function finalAnswer(arrayOfPrimeFactors, number){

    var count = 0;
    var answer = [];
    while(count < arrayOfPrimeFactors.length){
        var totalNumberThatIsDivisible = 0;
        for (var i in number){
            if(number[i] % arrayOfPrimeFactors[count] === 0){
                totalNumberThatIsDivisible += number[i];
            }
        }
        answer.push([arrayOfPrimeFactors[count], totalNumberThatIsDivisible]);
        count++;
    }
    console.log(answer);
    return answer;
}

sumByFactors([45, 97, 52, 24, 75483]);

