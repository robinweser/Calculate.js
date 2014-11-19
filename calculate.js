/*===========================================================================

   calculate.js is kind of an extension to the JavaScript build-in Math-Library.
   Check https://bitbucket.org/rofrischmann/calculate.js for more information

   Current Version: 0.0.1
                    September 15 2014

   Author(s): Robin Frischmann
   License: MIT License
            http://opensource.org/licenses/mit-license.php

   If you modify this code please add your name and what was modified to this
   header, as well as the date modified.

 ===========================================================================*/

//* MATH-INFO & CREDITS*//
Math.info = {
    name: "calculateMe.js",
    version: "1.0.0",
    build: "18.09.2014",
    author: "Robin Frischmann",
    copyright: "Copyright " + String.fromCharCode(169) + " 2014 Robin Frischmann - MIT licenese",
    repository: "https://bitbucket.org/Grindelwald/calculateme.js",
    description: "calculateMe.js is a small but powerful set of extensions for the build-in JavaScript Math-Library.",
    license: "MIT license (http://opensource.org/licenses/mit-license.php)"

}




//* MATH-EXTENSIONS  *//
/*CONSTANTS*/
var maxValue = 9999999999999999999;
Math.PHI = ((1 + Math.sqrt(5)) / 2);






/*FUNCTIONS*/
//Calculates a Math.sin but considering the selected mode  (default = DEG)
Math.sinus = function (value, mode) {
    return Math.sin(Math.parseSimpleTerm(value + getModeSetting(mode)));
}

//Calculates a Math.cos but considering the selected mode  (default = DEG)
Math.cosinus = function (value, mode) {
    return Math.cos(Math.parseSimpleTerm(value + getModeSetting(mode)));
}
//Calculates a Math.tan but considering the selected mode  (default = DEG)
Math.tangens = function (value, mode) {
    return Math.tan(Math.parseSimpleTerm(value + getModeSetting(mode)));
}

//Calculates a Math.asin but considering the selected mode  (default = DEG)
Math.arcusSinus = function (value, mode) {
    return Math.asin(Math.parseSimpleTerm(value + getModeSetting(mode)));
}

//Calculates a Math.acos but considering the selected mode  (default = DEG)
Math.arcusCosinus = function (value, mode) {
    return Math.acos(Math.parseSimpleTerm(value + getModeSetting(mode)));
}

//Calculates a Math.atan but considering the selected mode  (default = DEG)
Math.arcusTangens = function (value, mode) {
    return Math.atan(Math.parseSimpleTerm(value + getModeSetting(mode)));
}

//Converts a value to a Math.Fraction
Math.toFraction = function (value) {
    var val = Math.abs(value);
    for (var i = 2; i < maxValue; ++i) {
        if ((val * i) % 1 == 0) {
            return new Math.Fraction(value * i, i);
        }
    }
}

//Calculates a modulo
Math.mod = function (dividend, divisor) {
    return dividend % divisor;
}
//Calculates a division with remainder (Math.mod)
Math.div = function (dividend, divisor) {
    return parseInt(dividend / divisor);
}

//Calculates the square
Math.square = function (value) {
    return (value * value);
}

//Calculates the checksum
Math.checksum = function (value) {
    var checksum = 0;
    value = parseInt(value);
    while (value > 0) {
        checksum += (value % 10);
        value = Math.div(value, 10);
    }
    return checksum;
}
//Calculates the multiplicative digital root
Math.multiplicativeDigitalRoot = function (value) {
    var multiplicativeDigitalRoot = 1;
    value = parseInt(value);
    while (value > 0) {
        multiplicativeDigitalRoot *= (value % 10);
        value = Math.div(value, 10);
    }
    return multiplicativeDigitalRoot;
}

//Calculates the root of radicand to the rootExponent
Math.root = function (radicand, rootExponent) {
    return Math.pow(radicand, (1 / (rootExponent > 2 ? rootExponent : 2)));
}

//Calculates the factorial
Math.factorial = function (value) {
    if (value % 1 == 0) {
        var factorial = 1;
        for (var i = 2; i <= value; ++i) {
            factorial *= i;
        }
        return factorial;
    } else return false;
}

//Calculates  the sum of square numbers inbetween an interval
Math.sumOfSquareNumbers = function (interval, endValue) {
    var sumOfSquareNumbers = 0;
    var start, end;
    if (interval instanceof Math.Interval) {
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
}

//Calculates  the sum of narutals inbetween an interval
Math.sumOfNaturals = function (interval, endValue) {
    var sumOfNaturals = 0;
    var start, end;
    if (interval instanceof Math.Interval) {
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
}

//Returns the last digit of a number
Math.lastDigit = function (value) {
    return parseInt(value) % 10;
}

//Checks if a value is a prime number
Math.isPrime = function (value) {
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
}

//Calculates the [pos]-next prime number starting at [value]
Math.nextPrime = function (value, pos, includingNumber) {
    if (!includingNumber)++value;
    while (pos > 0) {
        if (Math.isPrime(value)) {
            --pos;
        }
        ++value;
    }
    --value;
    return value;
}

//Calculates the [pos]-previous prime number starting at [value]
Math.previousPrime = function (value, pos, includingNumber) {
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
}

//Calculates the prime number count inbetween an interval
Math.primeCount = function (interval, endValue) {
    var primeCount = 0;
    var start, end;
    if (interval instanceof Math.Interval) {
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
}

//Calculates the prime numbers inbetween an interval
Math.primes = function (interval, endValue) {
    var primes = [];
    var start, end;
    if (interval instanceof Math.Interval) {
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
}

//Returns a "valid" angle value (0-max. 360°)
Math.toCorrectAngle = function (value) {
    return value % 360;
}

//Calculates the narutal logarithm
Math.ln = function (value) {
    return Math.log(value);
}

//Calculates the base10 logarithm
Math.lg = function (value) {
    return Math.log(value) / Math.LN10;
}

//Calculates the base2 logarithm
Math.lb = function (value) {
    return Math.log(value) / Math.LN2;
}

//Calculates the logarithm to a specific base
Math.logarithm = function (value, logBase) {
    return Math.log(value) / Math.log((logBase ? logBase : 10));
}

//Checks if a dividend is divisible without remainder with a divisor
Math.isDivisible = function (dividend, divisor) {
    return (dividend % divisor == 0);
}

//Checks if value is a natural number
Math.isNatural = function (value) {
    return value >= 1 && value == Math.round(value);
}

//Checks if value is positive
Math.isPositive = function (value) {
    return value > 0;
}

//Checks if value is negative
Math.isNegative = function (value) {
    return value < 0;
}

//Calculates the greatest common factor of 2 values
Math.getGreatestCommonFactor = function (valueX, valueY) {
    return gcf(valueX, valueY);
}

//Returns the char-length of a number
Math.getLength = function (value) {
    return value.toString().length;
}




/*RELATIONS*/
//Compares to values and returns 0 if equal, 1 if larger and -1 if smaller
Math.compare = function (x, y) {
    return (x == y ? 0 : (x > y ? 1 : -1));
}

//Checks if 2 values are equal
Math.equal = function (x, y) {
    return x == y;
}

//Checks if 2 values are unequal
Math.unequal = function (x, y) {
    return x != y;
}

//Checks if x is larger than y
Math.larger = function (x, y) {
    return x > y;
}

//Checks if x is larger or equal than/to y
Math.largerEqual = function (x, y) {
    return x >= y;
}

//Checks if x is smaller than y
Math.smaller = function (x, y) {
    return x < y;
}

//Checks if x is smaller or equal than/to y
Math.smallerEqual = function (x, y) {
    return x <= y;
}




/* FRACTION */
Math.Fraction = function (numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}

//Returns the numerator
Math.Fraction.prototype.getNumerator = function () {
    return this.numerator;
}

//Sets the numerator
Math.Fraction.prototype.setNumerator = function (numerator) {
    this.numerator = numerator;
}

//Returns the denominator
Math.Fraction.prototype.getDenominator = function () {
    return this.denominator;
}

//Sets the denominator
Math.Fraction.prototype.setDenominator = function (denominator) {
    this.denominator = denominator;
}

//Returns the fraction
Math.Fraction.prototype.getFraction = function () {
    return this;
}

//Sets the (new) fraction
Math.Fraction.prototype.setFraction = function (numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}

//Returns the greatest common factor
Math.Fraction.prototype.getGreatestCommonFactor = function () {
    return gcf(this.numerator, this.denominator);
}

//Returns the canceled numerator
Math.Fraction.prototype.getCanceledNumerator = function () {
    return this.numerator / this.getGreatestCommonFactor();
}

//Returns the canceled denominator
Math.Fraction.prototype.getCanceledDenominator = function () {
    return this.denominator / this.getGreatestCommonFactor();
}

//Returns the canceled fraction
Math.Fraction.prototype.getCanceledFraction = function () {
    var gcf = this.getGreatestCommonFactor();
    return new Math.Fraction(this.numerator / gcf, this.denominator / gcf);
}

//Cancels the fraction
Math.Fraction.prototype.cancel = function () {
    var gcf = this.getGreatestCommonFactor();
    this.numerator /= gcf;
    this.denominator /= gcf;
}

//Returns the reciprocal
Math.Fraction.prototype.getReciprocal = function () {
    return new Math.Fraction(this.denominator, this.numerator);
}

//Returns the least common multiple
Math.Fraction.prototype.getLeastCommonMultiple = function (fraction) {
    var lcm = (this.denominator > fraction.denominator ? this.denominator : fraction.denominator);
    while (lcm % this.denominator != 0 || lcm % fraction.denominator != 0)++lcm;
    return lcm;
}

//Corrects the fraction to a standard form (always negative numerator not denominator)
Math.Fraction.prototype.correctAlgebraicSign = function () {
    if (this.denominator < 0) {
        this.numerator *= -1;
        this.denominator *= -1;
    }
}

//Calcultes the fraction float value
Math.Fraction.prototype.calculate = function () {
    return this.numerator / this.denominator;
}

//Converts the fraction to a string with a given delimiter
Math.Fraction.prototype.toString = function (delimiter) {
    return this.numerator + (delimiter ? delimiter : "/") + this.denominator;
}

//Divides by a fraction or value
Math.Fraction.prototype.divide = function (fraction) {
    if (fraction instanceof Math.Fraction) {
        this.numerator *= fraction.denominator;
        this.denominator *= fraction.numerator;
    } else {
        var frac = Math.toFraction(fraction);
        if (frac) {
            this.divide(frac);
        }
    }
}

//Multiplicates with a fraction or value
Math.Fraction.prototype.multiplicate = function (fraction) {
    if (fraction instanceof Math.Fraction) {
        this.numerator *= fraction.numerator;
        this.denominator *= fraction.denominator;
    } else {
        var frac = Math.toFraction(fraction);
        if (frac) {
            this.multiplicate(frac);
        }
    }
}

//Adds a fraction or value
Math.Fraction.prototype.add = function (fraction) {
    if (fraction instanceof Math.Fraction) {
        var lcm = this.getLeastCommonMultiple(fraction);
        this.numerator = this.numerator * (lcm / this.denominator) + fraction.numerator * (lcm / fraction.denominator);
        this.denominator = lcm;
    } else {
        var frac = Math.toFraction(fraction);
        if (frac) {
            this.add(frac);
        }
    }
}

//Substracts a fraction or value
Math.Fraction.prototype.substract = function (fraction) {
    if (fraction instanceof Math.Fraction) {
        var lcm = this.getLeastCommonMultiple(fraction);
        this.numerator = this.numerator * (lcm / this.denominator) - fraction.numerator * (lcm / fraction.denominator);
        this.denominator = lcm;
    } else {
        var frac = Math.toFraction(fraction);
        if (frac) {
            this.substract(frac);
        }
    }
}





/*INTERVAL*/
Math.Interval = function (startValue, endValue, includingStart, includingEnd) {
    if (typeof startValue == "string") {
        startValue = startValue.replace(/ /g, "");
        this.includingStart = (startValue.indexOf("(") != -1 ? false : true);
        this.startValue = parseFloat(startValue.split(",")[0].replace((this.includingStart ? "[" : "("), ""));
        this.includingEnd = (startValue.indexOf(")") != -1 ? false : true);
        this.endValue = parseFloat(startValue.split(",")[1].replace((this.includingEnd ? "]" : ")"), ""));
    } else {
        this.startValue = startValue;
        this.endValue = endValue;
        this.includingStart = (includingStart ? includingStart : true);
        this.includingEnd = (includingEnd ? includingEnd : true);
    }
}

//Returns the start value
Math.Interval.prototype.getStartValue = function () {
    return this.startValue;
}

//Sets the start value
Math.Interval.prototype.setStartValue = function (startValue) {
    this.startValue = startValue;
}

//Returns the end value
Math.Interval.prototype.getEndValue = function () {
    return this.endValue;
}

//Sets the start value
Math.Interval.prototype.setEndValue = function (endValue) {
    this.endValue = endValue;
}

//Returns weather the start value is included
Math.Interval.prototype.getIncludingStart = function () {
    return this.includingStart;
}

//Sets weather the start value is included
Math.Interval.prototype.setIncludingStart = function (includingStart) {
    this.includingStart = includingStart;
}

//Returns weather the end value is included
Math.Interval.prototype.getIncludingEnd = function () {
    return this.includingEnd;
}

//Sets weather the start value is included
Math.Interval.prototype.setIncludingEnd = function (includingEnd) {
    this.includingEnd = endValue;
}

//Converts the Interval to a standard interval-notation string
Math.Interval.prototype.toString = function () {
    return (this.includingStart ? "[" : "(") + this.startValue + ", " + this.endValue + (this.includingEnd ? "]" : ")");
}

//Checks if the interval is left opened
Math.Interval.prototype.isLeftOpened = function () {
    return (this.includingStart ? false : true);
}

//Checks if the interval is right opened
Math.Interval.prototype.isRightOpened = function () {
    return (this.includingEnd ? false : true);
}

//Checks if the interval is opened
Math.Interval.prototype.isOpened = function () {
    return (this.includingStart ? false : (this.includingEnd ? false : true));
}

//Checks if the interval is left closed
Math.Interval.prototype.isLeftClosed = function () {
    return (this.includingStart ? true : false);
}

//Checks if the interval is right closed
Math.Interval.prototype.isRightClosed = function () {
    return (this.includingEnd ? true : false);
}

//Checks if the interval is closed
Math.Interval.prototype.isClosed = function () {
    return (this.includingStart ? (this.includingEnd ? true : false) : false);
}






//*GEOMETRIC FORMS *//
/*CIRCLE*/
Math.Circle = function (radius) {
    this.radius = radius;
}

//Calculates the diameter
Math.Circle.prototype.getDiameter = function () {
    return 2 * this.radius;
}

//Calculates the circumference
Math.Circle.prototype.getCircumference = function () {
    return 2 * this.radius * Math.PI;
}

//Calculates the area
Math.Circle.prototype.getArea = function () {
    return Math.PI * (this.radius * this.radius);
}

//Calculates the arc length of an angle
Math.Circle.prototype.getArcLength = function (angle) {
    return (angle / 360) * this.getCircumfenrence();
}

//Calculates the arc area of an angle
Math.Circle.prototype.getArcArea = function (angle) {
    return (angle / 360) * this.getArea();
}

//Returns the radius
Math.Circle.prototype.getRadius = function () {
    return this.radius;
}

//Sets the radius
Math.Circle.prototype.setRadius = function (radius) {
    this.radius = radius;
}

//Converts the circle to a Math.Ball
Math.Circle.prototype.toBall = function () {
    return new Math.Ball(this.radius);
}




/*BALL*/
Math.Ball = function (radius) {
    this.radius = radius;
}

//Calculates the diameter
Math.Ball.prototype.getDiameter = function () {
    return 2 * this.radius;
}

//Calculates the surface
Math.Ball.prototype.getSurface = function () {
    return 4 * Math.PI * (this.radius * this.radius);
}

//Calculates the volume
Math.Ball.prototype.getVolume = function () {
    return (4 / 3) * Math.PI * (this.radius * this.radius * this.radius);
}

//Returns the radius
Math.Ball.prototype.getRadius = function () {
    return this.radius;
}

//Sets the radius
Math.Ball.prototype.setRadius = function (radius) {
    this.radius = radius;
}

//Coverts the ball to a Math.Circle
Math.Ball.prototype.toCircle = function () {
    return new Math.Circle(this.radius);
}




/* RECTANGLE */
Math.Rectangle = function (width, length) {
    this.width = width;
    this.length = length;
}

//Returns the length
Math.Rectangle.prototype.getLength = function () {
    return this.length;
}

//Sets the length
Math.Rectangle.prototype.setLength = function (length) {
    this.length = length;
}

//Returns the width
Math.Rectangle.prototype.getWidth = function () {
    return this.width;
}

//Sets the length
Math.Rectangle.prototype.setWidth = function (width) {
    this.width = width;
}

//Calculates the perimeter
Math.Rectangle.prototype.getPerimeter = function () {
    return 2 * (this.width + this.length);
}

//Checks if the rectangle is a square
Math.Rectangle.prototype.isSquare = function () {
    return (this.width == this.length);
}

//Calculates the area
Math.Rectangle.prototype.getArea = function () {
    return this.width * this.length;
}

//Calculates the diagonal
Math.Rectangle.prototype.getDiagonal = function () {
    return Math.sqrt((this.width * this.width) + (this.length * this.length));
}

//Sets the (new) size
Math.Rectangle.prototype.setSize = function (width, length) {
    this.width = width;
    this.length = length;
}

//Returns the size as a standard rectangle-notation string with a given delimiter
Math.Rectangle.prototype.getSize = function (delimiter) {
    return this.width + (delimiter ? delimiter : "x") + this.length;
}

//Converts to a cuboid with a specific height
Math.Rectangle.prototype.toCuboid = function (height) {
    return new Math.Cuboid(this.width, this.length, height);
}




/* CUBOID */
Math.Cuboid = function (width, length, height) {
    this.width = width;
    this.length = length;
    this.height = height;
}

//Returns the length
Math.Cuboid.prototype.getLength = function () {
    return this.length;
}

//Sets the length
Math.Cuboid.prototype.setLength = function (length) {
    this.length = length;
}

//Returns the height
Math.Cuboid.prototype.getHeight = function () {
    return this.height;
}

//Sets the height
Math.Cuboid.prototype.setHeight = function (height) {
    this.height = height;
}

//Returns the width
Math.Cuboid.prototype.getWidth = function () {
    return this.width;
}

//Sets the width
Math.Cuboid.prototype.setWidth = function (width) {
    this.width = width;
}

//Calculates the edge length
Math.Cuboid.prototype.getEdgeLength = function () {
    return 4 * (this.width + this.height + this.length);
}

//Checks if the cuboid is a hexaedron
Math.Cuboid.prototype.isHexaedron = function () {
    return (this.width == this.length && this.length == this.height);
}

//Calculates the surface
Math.Cuboid.prototype.getSurface = function () {
    return 2 * this.width * this.length + 2 * this.width * this.height + 2 * this.length * this.height;
}

//Sets the (new) size
Math.Cuboid.prototype.setSize = function (width, length, height) {
    this.width = width;
    this.length = length;
    this.height = height;
}

//Returns the size
Math.Cuboid.prototype.getSize = function (delimiter) {
    delimiter = (delimiter ? delimiter : "x");
    return this.width + delimiter + this.length + delimiter + this.height;
}

//Calculates the body diagonal
Math.Cuboid.prototype.getBodyDiagonal = function () {
    return Math.sqrt(this.width * this.width + this.length * this.length + this.height * this.height);
}




/*TRIANGLE*/
Math.Triangle = function (sideA, sideB, sideC) {
    this.a = sideA;
    this.b = sideB;
    this.c = sideC;
}

//Returns the side a
Math.Triangle.prototype.getSideA = function () {
    return this.a;
}

//Sets the side a
Math.Triangle.prototype.setSideA = function (sideA) {
    this.a = sideA;
}

//Returns the side b
Math.Triangle.prototype.getSideB = function () {
    return this.b;
}

//Sets the side b
Math.Triangle.prototype.setSideB = function (sideB) {
    this.b = sideB;
}

//Returns the side c
Math.Triangle.prototype.getSideC = function () {
    return this.c;
}

//Sets the side c
Math.Triangle.prototype.setSideC = function (sideC) {
    this.c = sideC;
}

//Calculates the perimeter
Math.Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
}

//Sets the (new) size
Math.Triangle.prototype.setSize = function (sideA, sideB, sideC) {
    this.a = sideA;
    this.b = sideB;
    this.c = sideC;
}

//Calculates the height to the base side a
Math.Triangle.prototype.getHeightA = function () {
    return Math.sin(this.getBeta()) * this.c;
}

//Calculates the height to the base side b
Math.Triangle.prototype.getHeightB = function () {
    return Math.sin(this.getGamma()) * this.a;
}

//Calculates the height to the base side c
Math.Triangle.prototype.getHeightC = function () {
    return Math.sin(this.getAlpha()) * this.b;
}

//Calculates the heights
Math.Triangle.prototype.getHeights = function () {
    return {
        heightA: this.getHeightA(),
        heightB: this.getHeightB(),
        heightC: this.getHeightC()
    }
}

//Calculates the angle gamma
Math.Triangle.prototype.getGamma = function () {
    return Math.acos((this.c * this.c - this.b * this.b - this.a * this.a) / (-2 * this.a * this.b));
}

//Calculates the angle beta
Math.Triangle.prototype.getBeta = function () {
    return Math.acos((this.b * this.b - this.a * this.a - this.c * this.c) / (-2 * this.a * this.c));
}

//Calculates the angle alpha
Math.Triangle.prototype.getAlpha = function () {
    return Math.acos((this.a * this.a - this.b * this.b - this.c * this.c) / (-2 * this.b * this.c));
}

//Calculates the angles
Math.Triangle.prototype.getAngles = function () {
    return {
        alpha: this.getAlpha(),
        beta: this.getBeta(),
        gamma: this.getGamma()
    }
}

//Calculates the angle area
Math.Triangle.prototype.getArea = function () {
    return ((1 / 2) * this.c) * this.getHeightC();
}

//Checks if the triangle is isosceles
Math.Triangle.prototype.isIsosceles = function () {
    var gamma = this.getGamma();
    var alpha = this.getAlpha();
    var beta = this.getBeta();
    return ((this.a == this.b && this.a != this.c && alpha == beta) || (this.b == this.c && this.b != this.a && beta == gamma) || (this.c == this.a && this.c != this.b && alpha == gamma));
}

//Checks if the triangle is equilateral
Math.Triangle.prototype.isEquilateral = function () {
    return (this.a == this.b && this.b == this.c && this.getAlpha() == this.getGamma() && this.getAlpha() == this.getBeta());
}

//Checks if the triangle is rightAngled
Math.Triangle.prototype.isRightAngled = function () {
    return (this.getAlpha() == 90 || this.getBeta() == 90 || this.getGamma() == 90);
}

//Checks if the triangle actually is a triangle (e.g. Triangle(1,2,3) is not a triangle)
Math.Triangle.prototype.isTriangle = function () {
    return !(this.a + this.b == this.c || this.b + this.c == this.a || this.c + this.a == this.b);
}







//*MATHEMATICAL ANALYSIS*//
/* TERM-PARSER */
//Contains all alternative notation possibilities that can also be used to define a term
Math.alternativeNotation = {
    ":": "/",
    " ": "",
    "squareroot": "sqrt",
    "w": "sqrt",
    "Wurzel": "sqrt",
    "root": "sqrt",
    "pi": Math.PI,
    "e": Math.E,
    ",": ".",
    "log": "lg",
    "sinus": "sin",
    "cosinus": "cos",
    "tangens": "tan"

}

//Contains the whole alphabet with which a term is constructed
Math.alphabet = ["e", "pi", "ln(", "lg(", "tan(", "sin(", "cos(", "sqrt(", "|(", ".", " ", ",", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "(", ")", "+", "-", "*", "/", "^"];

//Calculates a simple term only containing addition, substraction, multiplication and division
Math.parseSimpleTerm = function (term) {
    var erg = 0.0;
    var tempLeft, tempRight, tempOperator;
    var tempTerm;
    var addition = term.split('+');
    var i = 0;
    while (i <= addition.length - 1) {
        tempTerm = addition[i];
        tempTerm = tempTerm.replace("--", "+");
        tempTerm = tempTerm.replace("+-", "-");
        while (tempTerm.indexOf('*') != -1 || tempTerm.indexOf('/') != -1) {
            tempLeft = addUntil(tempTerm);
            tempOperator = tempTerm.substr(tempLeft.length, 1);
            tempRight = addUntil(tempTerm.substr(tempLeft.length + 1, tempTerm.length - (tempLeft.length) - 1));
            if (tempRight == "" || tempLeft == "") {
                return "wrong";
            }
            if (tempOperator.indexOf("*") != -1) tempTerm = tempTerm.replace(tempTerm.substr(0, tempLeft.length + 1 + tempRight.length), (tempLeft * tempRight));
            if (tempOperator.indexOf("/") != -1) tempTerm = tempTerm.replace(tempTerm.substr(0, tempLeft.length + 1 + tempRight.length), (tempLeft / tempRight));
        }
        erg += parseFloat(tempTerm);
        ++i;
    }
    return erg;
}

//Calcules a simple term also containing brackets
Math.parseBracketTerm = function (term, mode) {
    var i = 0;
    var start = 0;
    var row = 1;
    if (term.indexOf("(") != -1) {
        while (term.indexOf("(") != -1) {
            while (row > 0) {
                if (term.substr(i, 1) == "(") {
                    start = i + 1;
                    row = 1;
                }
                if (term.substr(i, 1) == ")") {
                    --row;
                    break;
                }
                ++i;
            }
            term = term.replace("(" + term.substr(start, i - start + 1), Math.parseTerm(term.substr(start, i - start), mode));
            row = 1;
            i = 0;
            start = 0;
        }
    }
    return term;
}

//Calculates a sinus considering the selected mode  (default = DEG)
Math.parseSin = function (term, mode) {
    var row = 1;
    var i = 1;
    var actual;
    if (term.indexOf("sin") != -1) {
        var splitSin = term.split('sin');
        for (var p = 1; p <= splitSin.length - 1; ++p) {
            actual = splitSin[p];
            while (row > 0) {
                if (actual.substr(i, 1) == "(")++row;
                if (actual.substr(i, 1) == ")")--row;
                ++i;
            }
            term = term.replace("sin" + actual.substr(0, i), Math.sin(Math.parseTerm("(" + actual.substr(0, i) + getModeSetting(mode) + ")", mode)));
            row = 1;
            i = 1;
        }
    }
    return term;
}

//Calculates a cosinus considering the selected mode (default = DEG)
Math.parseCos = function (term, mode) {
    var row = 1;
    var i = 1;
    var actual;
    if (term.indexOf("cos") != -1) {
        var splitCos = term.split('cos');
        for (var p = 1; p <= splitCos.length - 1; ++p) {
            actual = splitCos[p];
            while (row > 0) {
                if (actual.substr(i, 1) == "(")++row;
                if (actual.substr(i, 1) == ")")--row;
                ++i;
            }
            term = term.replace("cos" + actual.substr(0, i), Math.cos(Math.parseTerm("(" + actual.substr(0, i) + getModeSetting(mode) + ")", mode)));
            row = 1;
            i = 1;
        }
    }
    return term;
}

//Calculates a tangens considering the selected mode  (default = DEG)
Math.parseTan = function (term, mode) {
    var row = 1;
    var i = 1;
    var actual;
    if (term.indexOf("tan") != -1) {
        var splitTan = term.split('tan');
        for (var p = 1; p <= splitTan.length - 1; ++p) {
            actual = splitTan[p];
            while (row > 0) {
                if (actual.substr(i, 1) == "(")++row;
                if (actual.substr(i, 1) == ")")--row;
                ++i;
            }
            term = term.replace("tan" + actual.substr(0, i), Math.tan(Math.parseTerm("(" + actual.substr(0, i) + getModeSetting(mode) + ")", mode)));
            row = 1;
            i = 1;
        }
    }
    return term;
}

//Calculates an absolute value
Math.parseAbs = function (term, mode) {
    var row = 1;
    var i = 1;
    var actual;
    if (term.indexOf("|") != -1) {
        var splitSin = term.split('|');
        for (var p = 1; p <= splitSin.length - 1; ++p) {
            actual = splitSin[p];
            while (row > 0) {
                if (actual.substr(i, 1) == "(")++row;
                if (actual.substr(i, 1) == ")")--row;
                ++i;
            }
            term = term.replace("|" + actual.substr(0, i), Math.abs(Math.parseTerm("(" + actual.substr(0, i) + ")", mode)));
            row = 1;
            i = 1;
        }
    }
    return term;
}

//Calculates a logarithmus
Math.parseLog = function (term, mode) {
    var row = 1;
    var i = 1;
    var actual;
    if (term.indexOf("ln") != -1) {
        var splitLn = term.split('ln');
        for (var p = 1; p <= splitLn.length - 1; ++p) {
            actual = splitLn[p];
            while (row > 0) {
                if (actual.substr(i, 1) == "(")
                ++row;
                if (actual.substr(i, 1) == ")")
                --row;
                ++i;
            }
            term = term.replace("ln" + actual.substr(0, i), Math.log(Math.parseTerm("(" + actual.substr(0, i) + ")", mode)));
            row = 1;
            i = 1;
        }
    }
    if (term.indexOf("lg") != -1) {
        var splitLg = term.split('lg');
        for (var p = 1; p <= splitLg.length - 1; ++p) {
            actual = splitLg[p];
            while (row > 0) {
                if (actual.substr(i, 1) == "(")
                ++row;
                if (actual.substr(i, 1) == ")")
                --row;
                ++i;
            }
            term = term.replace("lg" + actual.substr(0, i), (Math.log(Math.parseTerm("(" + actual.substr(0, i) + ")", mode)) / Math.LN10));
            row = 1;
            i = 1;
        }
    }
    return term;
}

//Calculates a squareroot
Math.parseSqr = function (term, mode) {
    var row = 1;
    var i = 1;
    var actual;
    if (term.indexOf("sqrt") != -1) {
        var splitSqr = term.split('sqrt');
        for (var p = 1; p <= splitSqr.length - 1; ++p) {
            actual = splitSqr[p];
            while (row > 0) {
                if (actual.substr(i, 1) == "(")++row;
                if (actual.substr(i, 1) == ")")--row;
                ++i;
            }
            term = term.replace("sqrt" + actual.substr(0, i), Math.sqrt(Math.parseTerm("(" + actual.substr(0, i) + ")", mode)));
            row = 1;
            i = 1;
        }
    }
    return term;
}

//Calculates a pow with any base and exponent
Math.parsePow = function (term, mode) {
    var row = 0;
    var i = 1;
    var j = 0;
    var left, right;
    while (term.indexOf("^") != -1) {
        var splitPow = term.split('^');
        left = splitPow[0];
        right = splitPow[1];
        while (left.length >= i) {
            if (left.substr(left.length - i, 1) == "(") {
                --row;
                if (row < 0) {
                    left = left.substr(left.length - i + 1, i - 1);
                    break;
                }
            }
            if (left.substr(left.length - i, 1) == ")")++row;
            if (left.substr(left.length - i, 1).indexOf("/") != -1 || left.substr(left.length - i, 1).indexOf("*") != -1 || left.substr(left.length - i, 1).indexOf("^") != -1 || left.substr(left.length - i, 1).indexOf("-") != -1 || left.substr(left.length - i, 1).indexOf("+") != -1) {
                if (row == 0) {
                    break;
                }
            }
            ++i;
        }
        row = 0;
        while (right.length > j) {
            if (right.substr(j, 1) == "(")++row;
            if (right.substr(j, 1) == ")") {
                --row;
                if (row < 0) {
                    right = right.substr(0, j);
                    break;
                }
            }
            if (right.substr(j, 1).indexOf("/") != -1 || right.substr(j, 1).indexOf("*") != -1 || right.substr(j, 1).indexOf("^") != -1 || right.substr(j, 1).indexOf("+") != -1) {
                if (row == 0) {
                    break;
                }
            }
            j++;
        }
        term = term.replace(left.substr(left.length - i + 1, i - 1) + "^" + right.substr(0, j), Math.pow(Math.parseTerm(left.substr(left.length - i + 1, i - 1), mode), Math.parseTerm(right.substr(0, j), mode)));
        i = 1;
        j = 0;
    }
    return term;
}

//Calculates a full term with the whole alphabet considering the selected mode  (default = DEG)
Math.parseTerm = function (term, mode) {
    term = term.replace("--", "+");
    term = Math.parseAbs(term, mode);
    term = Math.parsePow(term, mode);
    term = Math.parseLog(term, mode);
    term = Math.parseSin(term, mode);
    term = Math.parseTan(term, mode);
    term = Math.parseCos(term, mode);
    term = Math.parseSqr(term, mode);
    term = Math.parseSimpleTerm(Math.parseBracketTerm(term, mode));
    return term;
}

//Corrects a term as much as possible (wrong operators, right alphabet)
Math.correctTerm = function (term) {
    if (term.substr(0, 1) == "-") term = "(-1)*" + term.substr(1, term.length - 1);
    term = term.toLowerCase();
    for (item in Math.alternativeNotation) {
        while (term.indexOf(item) != -1) {
            term = term.replace(item, Math.alternativeNotation[item]);
        }
    }
    term = term.replace("--", "+");
    term = term.replace("+-", "-");
    for (var i = 0; i <= term.length - 1; ++i) {
        if (term.substr(i, 1).indexOf("-") == 0) {
            if (term.substr(i - 1, 1).indexOf("(") == -1 && term.substr(i - 1, 1).indexOf("/") == -1 && term.substr(i - 1, 1).indexOf("*") == -1 && term.substr(i - 1, 1).indexOf("^") == -1 && term.substr(i - 1, 1).indexOf("-") == -1) {
                term = term.substr(0, i) + "+" + term.substr(i, term.length - i);
                ++i;
            }
        }
    }
    term = term.toLowerCase();
    return term;
}

//Checks if a term has its brackets set correct
Math.isCorrectBrackets = function (term) {
    var row = 0;
    if (term.indexOf("()") != -1) {
        return false;
    };
    for (var i = 0; i < term.length; ++i) {
        if (term.substr(i, 1) == "(")++row;
        if (term.substr(i, 1) == ")")--row;
        if (row < 0) {
            return false;
        }
    }
    if (row == 0) {
        return true;
    } else {
        return false;
    }
}

//Checks if a term uses the correct alphabet
Math.isCorrectAlphabet = function (term, alphabet) {
    alphabet = (alphabet ? alphabet : Math.alphabet);
    for (var i = 0; i < Math.alphabet.length; ++i) {
        while (term.indexOf(alphabet[i]) != -1) {
            term = term.replace(alphabet[i], "");
        }
    }
    if (term.length == 0) {
        return true;
    } else {
        return false;
    }
}

//USE THIS ONE TO FINALLY CALCULATE
//Returns the calculated term with all settings, checks and selected mode (default = DEG)
Math.calculate = function (term, mode) {
    term = Math.correctTerm(term);
    if (Math.isCorrectBrackets(term)) {
        if (Math.isCorrectAlphabet(term)) {
            var erg = Math.parseTerm(term, mode);
            if (erg.toString() == "NaN" || erg.toString() == "wrong") {
                return "Invalid term. Something caused the parser to crash.";
            } else {
                return erg;
            }
        } else {
            return "Invalid notation. You did not only use chars of the Math.alphabet only.";
        }
    } else {
        return "Invalid brackets. You might have not closed all the brackets."
    }
}





/*TERM CLASS*/
Math.Term = function (term, mode) {
    this.term = term;
    this.mode = (mode ? mode : "DEG");
}

Math.Term.prototype.alphabet = Math.alphabet;

//Corrects and returns the term
Math.Term.prototype.correctTerm = function () {
    this.term = Math.correctTerm(this.term);
}

//Calculates the term and returns the result
Math.Term.prototype.calculate = function () {
    return Math.calculate(this.term, this.mode);
}
//Sets the mode, "DEG", "GRA" or "RAD"
Math.Term.prototype.setMode = function (mode) {
    this.mode = mode;
}

//Returns the mode
Math.Term.prototype.getMode = function () {
    return this.mode;
}

//Returns the term
Math.Term.prototype.getTerm = function () {
    return this.term;
}

//Sets the new term
Math.Term.prototype.setTerm = function (term) {
    this.term = term;
}

//Checks if the term uses the correct alphabet
Math.Term.prototype.isCorrectAlphabet = function () {
    return Math.isCorrectAlphabet(this.term, this.alphabet);
}

//Checks if the term has its brackets set correct
Math.Term.prototype.isCorrectBrackets = function () {
    return Math.isCorrectBrackets(this.term);
}





/*FUNCTION*/
Math.Function = function (term, mode) {
    this.term = term;
    this.mode = (mode ? mode : "DEG");
};
//Inclues all Math.Term functions
Math.Function.prototype = new Math.Term();

//Checks if the function uses the correct alphabet including "x"
Math.Function.prototype.isCorrectAlphabet = function () {
    return Math.isCorrectAlphabet(this.term.replace(/x/g, " "), this.alphabet);
}

//Calculates the term and returns the result
Math.Function.prototype.calculate = function (x) {
    return Math.calculate(this.term.replace(/x/g, x), this.mode);
}

//Calcultes a whole table of values in a given interval in specific steps
Math.Function.prototype.getTableOfValues = function (startValue, endValue, steps) {
    var tableOfValues = {};
    var start, end;
    if (startValue instanceof Math.Interval) {
        start = startValue.startValue;
        end = startValue.endValue;
        if (!startValue.includingStart) start += 1;
        if (!startValue.includingEnd) end -= 1;
        steps = endValue;
    } else {
        start = startValue;
        end = endValue;
    }
    for (var i = start; i <= end; i += (steps ? steps : 1)) {
        tableOfValues[i] = this.calculate(i);
    }
    return tableOfValues;
}

//Calculates the y-intercept
Math.Function.prototype.getYIntercept = function () {
    return this.calculate(0);
}

//Converts the function into a standard function-notation string
Math.Function.prototype.toString = function () {
    this.correctTerm();
    return "f(x)=" + this.term;
}






//*SHORTCUTS*//
function Interval(a, b, c, d) {
    return new Math.Interval(a, b, c, d);
}

function Term(a, b) {
    return new Math.Term(a, b);
}

function Cirlce(r) {
    return new Math.Circle(r);
}

function Ball(r) {
    return new Math.Ball(r);
}

function Function(a, b) {
    return new Math.Function(a, b);
}

function Rectangle(a, b) {
    return new Math.Rectangle(a, b);
}

function Cuboid(a, b, c) {
    return new Math.Cuboid(a, b, c);
}

function Fraction(a, b) {
    return new Math.Fraction(a, b);
}

function Triangle(a, b, c) {
    return new Math.Triangle(a, b, c);
}




//*ADDITIONAL FUNCTIONS*//
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
