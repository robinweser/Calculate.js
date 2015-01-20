var maxValue = 9999999999999999999;

var Calculate = {
    PHI: ((1 + Math.sqrt(5)) / 2),

    //------Functions
    //Calculates a Math.sin but considering the selected mode  (default = DEG)
    sinus: function (value, mode) {
        return Math.sin(Parser.parseSimpleTerm(value + getModeSetting(mode)));
    },

    //Calculates a Math.cos but considering the selected mode  (default = DEG)
    cosinus: function (value, mode) {
        return Math.cos(Parser.parseSimpleTerm(value + getModeSetting(mode)));
    },
    //Calculates a Math.tan but considering the selected mode  (default = DEG)
    tangens: function (value, mode) {
        return Math.tan(Parser.parseSimpleTerm(value + getModeSetting(mode)));
    },

    //Calculates a Math.asin but considering the selected mode  (default = DEG)
    arcusSinus: function (value, mode) {
        return Math.asin(Parser.parseSimpleTerm(value + getModeSetting(mode)));
    },

    //Calculates a Math.acos but considering the selected mode  (default = DEG)
    arcusCosinus: function (value, mode) {
        return Math.acos(Parser.parseSimpleTerm(value + getModeSetting(mode)));
    },

    //Calculates a Math.atan but considering the selected mode  (default = DEG)
    arcusTangens: function (value, mode) {
        return Math.atan(Parser.parseSimpleTerm(value + getModeSetting(mode)));
    },

    //Converts a value to a Math.Fraction
    toFraction: function (value) {
        var val = Math.abs(value);
        for (var i = 2; i < maxValue; ++i) {
            if ((val * i) % 1 == 0) {
                return new Fraction(value * i, i);
            }
        }
    },

    //Calculates a modulo
    mod: function (dividend, divisor) {
        return dividend % divisor;
    },
    //Calculates a division with remainder (Math.mod)
    div: function (dividend, divisor) {
        return parseInt(dividend / divisor);
    },

    //Calculates the square
    square: function (value) {
        return (value * value);
    },

    //Calculates the checksum
    checksum: function (value) {
        var checksum = 0;
        value = parseInt(value);
        while (value > 0) {
            checksum += (value % 10);
            value = Math.div(value, 10);
        }
        return checksum;
    },
    //Calculates the multiplicative digital root
    multiplicativeDigitalRoot: function (value) {
        var multiplicativeDigitalRoot = 1;
        value = parseInt(value);
        while (value > 0) {
            multiplicativeDigitalRoot *= (value % 10);
            value = Math.div(value, 10);
        }
        return multiplicativeDigitalRoot;
    },

    //Calculates the root of radicand to the rootExponent
    root: function (radicand, rootExponent) {
        return Math.pow(radicand, (1 / (rootExponent > 2 ? rootExponent : 2)));
    },

    //Calculates the factorial
    factorial: function (value) {
        if (value % 1 == 0) {
            var factorial = 1;
            for (var i = 2; i <= value; ++i) {
                factorial *= i;
            }
            return factorial;
        } else return false;
    },

    //Calculates  the sum of square numbers inbetween an interval
    sumOfSquareNumbers: function (interval, endValue) {
        var sumOfSquareNumbers = 0;
        var start, end;
        if (interval instanceof Interval) {
            start = interval.startValue;
            end = interval.endValue;
            if (!interval.includingStart) start += 1;
            if (!interval.includingEnd) end -= 1;
        } else {
            start = parseInt(interval);
            end = parseInt(endValue);

        }
        for (var i = start; i <= end; ++i) {
            sumOfSquareNumbers += (i * i);
        }
        return sumOfSquareNumbers;
    },

    //Calculates  the sum of narutals inbetween an interval
    sumOfNaturals: function (interval, endValue) {
        var sumOfNaturals = 0;
        var start, end;
        if (interval instanceof Interval) {
            start = interval.startValue;
            end = interval.endValue;
            if (!interval.includingStart) start += 1;
            if (!interval.includingEnd) end -= 1;
        } else {
            start = parseInt(interval);
            end = parseInt(endValue);

        }
        for (var i = start; i <= end; ++i) {
            sumOfNaturals += i;
        }
        return sumOfNaturals;
    },

    //Returns the last digit of a number
    lastDigit: function (value) {
        return parseInt(value) % 10;
    },

    //Checks if a value is a prime number
    isPrime: function (value) {
        if (value == Math.floor(value)) {
            var isPrime = (value < 2 || value == 4 || (value > 5 && (!(value % 2) || !(value % 3) || !(value % 5))) ? false : true);
            var maxDivisor = parseInt(Math.sqrt(value));
            if (isPrime) {
                for (var i = 7; i <= maxDivisor; i += 2) {
                    if (value % i == 0) {
                        return false;
                    }
                }
            }
            return isPrime;
        } else return false;
    },

    //Calculates the [pos]-next prime number starting at [value]
    nextPrime: function (value, pos, includingNumber) {
        if (!includingNumber)++value;
        while (pos > 0) {
            if (Math.isPrime(value)) {
                --pos;
            }
            ++value;
        }
        --value;
        return value;
    },

    //Calculates the [pos]-previous prime number starting at [value]
    previousPrime: function (value, pos, includingNumber) {
        if (!includingNumber)--value;
        while (pos > 0) {
            if (Math.isPrime(value)) {
                --pos;
            }
            --value;
            if (value == 1) {
                pos = 0;
            }
        }
        ++value;
        return value;
    },

    //Calculates the prime number count inbetween an interval
    primeCount: function (interval, endValue) {
        var primeCount = 0;
        var start, end;
        if (interval instanceof Interval) {
            start = interval.startValue;
            end = interval.endValue;
            if (!interval.includingStart) start += 1;
            if (!interval.includingEnd) end -= 1;
        } else {
            start = parseInt(interval);
            end = parseInt(endValue);
        }
        if (start < end) {
            for (var i = start; i <= end; ++i) {
                if (Math.isPrime(i))++primeCout;
            }
        }
        return primeCount;
    },

    //Calculates the prime numbers inbetween an interval
    primes: function (interval, endValue) {
        var primes = [];
        var start, end;
        if (interval instanceof Interval) {
            start = interval.startValue;
            end = interval.endValue;
            if (!interval.includingStart) start += 1;
            if (!interval.includingEnd) end -= 1;
        } else {
            start = parseInt(interval);
            end = parseInt(endValue);
        }
        if (start < end) {
            for (var i = start; i <= end; ++i) {
                if (Math.isPrime(i)) primes.push(i);
            }
        }
        return primes;
    },

    //Returns a "valid" angle value (0-max. 360°)
    toCorrectAngle: function (value) {
        return value % 360;
    },

    //Calculates the narutal logarithm
    ln: function (value) {
        return Math.log(value);
    },

    //Calculates the base10 logarithm
    lg: function (value) {
        return Math.log(value) / Math.LN10;
    },

    //Calculates the base2 logarithm
    lb: function (value) {
        return Math.log(value) / Math.LN2;
    },

    //Calculates the logarithm to a specific base
    logarithm: function (value, logBase) {
        return Math.log(value) / Math.log((logBase ? logBase : 10));
    },

    //Checks if a dividend is divisible without remainder with a divisor
    isDivisible: function (dividend, divisor) {
        return (dividend % divisor == 0);
    },

    //Checks if value is a natural number
    isNatural: function (value) {
        return value >= 1 && value == Math.round(value);
    },

    //Checks if value is positive
    isPositive: function (value) {
        return value > 0;
    },

    //Checks if value is negative
    isNegative: function (value) {
        return value < 0;
    },

    //Calculates the greatest common factor of 2 values
    getGreatestCommonFactor: function (valueX, valueY) {
        return gcf(valueX, valueY);
    },

    //Returns the char-length of a number
    getLength: function (value) {
        return value.toString().length;
    },




    //------Relations
    //Compares to values and returns 0 if equal, 1 if larger and -1 if smaller
    compare: function (x, y) {
        return (x == y ? 0 : (x > y ? 1 : -1));
    },

    //Checks if 2 values are equal
    equal: function (x, y) {
        return x == y;
    },

    //Checks if 2 values are unequal
    unequal: function (x, y) {
        return x != y;
    },

    //Checks if x is larger than y
    larger: function (x, y) {
        return x > y;
    },

    //Checks if x is larger or equal than/to y
    largerEqual: function (x, y) {
        return x >= y;
    },

    //Checks if x is smaller than y
    smaller: function (x, y) {
        return x < y;
    },

    //Checks if x is smaller or equal than/to y
    smallerEqual: function (x, y) {
        return x <= y;
    },
}

//------Additional Functions
//Returns a term with only addition/substraction until a multiplication/division starts
function addUntil(term) {
    var i = 0;
    if (term.indexOf("*") != -1 || term.indexOf("/") != -1) {
        while (term.substr(i, 1).indexOf("*") == -1 && term.substr(i, 1).indexOf("/") == -1 && term.length > i + 1)++i;
        return term.substr(0, Math.max(1, i));
    } else return term;
};

//Returns the factor used to calculate the different settings DEG, RAD, GRA, defaults to DEG
function getModeSetting(mode) {
    var setting = "/ 180 * " + Math.PI;
    if (mode == "RAD") setting = "";
    if (mode == "GRA") setting = "/ 400 * 360 / 180 * " + Math.PI;
    return setting;
};

//Calculates the greatest common factor of 2 values x, y
function gcf(x, y) {
    var gcf = 1;
    x = Math.abs(x);
    y = Math.abs(y);
    while (x % 2 == 0 && y % 2 == 0) {
        x /= 2;
        y /= 2;
        gcf *= 2;
    }
    while (x != 0) {
        while (x % 2 == 0) x /= 2;
        while (y % 2 == 0) y /= 2;
        if (x < y) {
            var c = x;
            x = y;
            y = c;
        }
        x -= y;
    }
    return y * gcf;
}