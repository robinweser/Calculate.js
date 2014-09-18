/*===========================================================================

   calculateMe.js is kind of an extension to the JavaScript build-in Math-Library.
   Check https://bitbucket.org/Grindelwald/calculateme.js for more information

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
    description: "calculateMe.js is a small but powerful extensions for the build-in JavaScript Math-Library.",
    license: "MIT license (http://opensource.org/licenses/mit-license.php)"

}

//* MATH-EXTENSIONS  *//
/*CONSTANTS*/
var maxValue = 9999999999999999999;
Math.PHI = ((1 + Math.sqrt(5)) / 2);


/*FUNCTIONS*/
Math.sinus = function (value, mode) {
    return Math.sin(Math.parseSimpleTerm(value + getModeSetting(mode)));
}
Math.cosinus = function (value, mode) {
    return Math.cos(Math.parseSimpleTerm(value + getModeSetting(mode)));
}
Math.tangens = function (value, mode) {
    return Math.tan(Math.parseSimpleTerm(value + getModeSetting(mode)));
}
Math.arcusSinus = function (value, mode) {
    return Math.asin(Math.parseSimpleTerm(value + getModeSetting(mode)));
}
Math.arcusCosinus = function (value, mode) {
    return Math.acos(Math.parseSimpleTerm(value + getModeSetting(mode)));
}
Math.arcusTangens = function (value, mode) {
    return Math.atan(Math.parseSimpleTerm(value + getModeSetting(mode)));
}
Math.toFraction = function (value) {
    var val = Math.abs(value);
    for (var i = 2; i < maxValue; ++i) {
        if ((val * i) % 1 == 0) {
            return new Math.Fraction(value * i, i);
        }
    }
}
Math.mod = function (dividend, divisor) {
    return dividend % divisor;
}
Math.div = function (dividend, divisor) {
    return parseInt(dividend / divisor);
}
Math.square = function (value) {
    return (value * value);
}
Math.checksum = function (value) {
    var checksum = 0;
    value = parseInt(value);
    while (value > 0) {
        checksum += (value % 10);
        value = Math.div(value, 10);
    }
    return checksum;
}
Math.multiplicativeDigitalRoot = function (value) {
    var multiplicativeDigitalRoot = 1;
    value = parseInt(value);
    while (value > 0) {
        multiplicativeDigitalRoot *= (value % 10);
        value = Math.div(value, 10);
    }
    return multiplicativeDigitalRoot;
}
Math.root = function (radicand, rootExponent) {
    return Math.pow(radicand, (1 / (rootExponent > 2 ? rootExponent : 2)));
}
Math.factorial = function (value) {
    if (value % 1 == 0) {
        var factorial = 1;
        for (var i = 2; i <= value; ++i) {
            factorial *= i;
        }
        return factorial;
    } else return false;
}
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
Math.lastDigit = function (value) {
    return parseInt(value) % 10;
}
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
Math.toCorrectAngle = function (value) {
    return value % 360;
}
Math.ln = function (value) {
    return Math.log(value);
}
Math.lg = function (value) {
    return Math.log(value) / Math.LN10;
}
Math.lb = function (value) {
    return Math.log(value) / Math.LN2;
}
Math.logarithm = function (value, logBase) {
    return Math.log(value) / Math.log((logBase ? logBase : 10));
}
Math.isDivisible = function (dividend, divisor) {
    return (dividend % divisor == 0);
}
Math.isNatural = function (value) {
    return value >= 1 && value == Math.round(value);
}
Math.isPositive = function (value) {
    return value > 0;
}
Math.isNegative = function (value) {
    return value < 0;
}
Math.getGreatestCommonFactor = function (valueX, valueY) {
    return gcf(valueX, valueY);
}
Math.getLength = function (value) {
    return value.toString().length;
}




/*RELATIONS*/
Math.compare = function (x, y) {
    return (x == y ? 0 : (x > y ? 1 : -1));
}
Math.equal = function (x, y) {
    return x == y;
}
Math.unequal = function (x, y) {
    return x != y;
}
Math.larger = function (x, y) {
    return x > y;
}
Math.largerEqual = function (x, y) {
    return x >= y;
}
Math.smaller = function (x, y) {
    return x < y;
}
Math.smallerEqual = function (x, y) {
    return x <= y;
}



/* FRACTION */
Math.Fraction = function (numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}
Math.Fraction.prototype.getNumerator = function () {
    return this.numerator;
}
Math.Fraction.prototype.setNumerator = function (numerator) {
    this.numerator = numerator;
}
Math.Fraction.prototype.getDenominator = function () {
    return this.denominator;
}
Math.Fraction.prototype.setDenominator = function (denominator) {
    this.denominator = denominator;
}
Math.Fraction.prototype.getFraction = function () {
    return this;
}
Math.Fraction.prototype.setFraction = function (numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}
Math.Fraction.prototype.getGreatestCommonFactor = function () {
    return gcf(this.numerator, this.denominator);
}
Math.Fraction.prototype.getCanceledNumerator = function () {
    return this.numerator / this.getGreatestCommonFactor();
}
Math.Fraction.prototype.getCanceledDenominator = function () {
    return this.denominator / this.getGreatestCommonFactor();
}
Math.Fraction.prototype.getCanceledFraction = function () {
    var gcf = this.getGreatestCommonFactor();
    return new Math.Fraction(this.numerator / gcf, this.denominator / gcf);
}
Math.Fraction.prototype.cancel = function () {
    var gcf = this.getGreatestCommonFactor();
    this.numerator /= gcf;
    this.denominator /= gcf;
}
Math.Fraction.prototype.getReciprocal = function () {
    return new Math.Fraction(this.denominator, this.numerator);
}
Math.Fraction.prototype.getLeastCommonMultiple = function (fraction) {
    var lcm = (this.denominator > fraction.denominator ? this.denominator : fraction.denominator);
    while (lcm % this.denominator != 0 || lcm % fraction.denominator != 0)++lcm;
    return lcm;
}
Math.Fraction.prototype.correctAlgebraicSign = function () {
    if (this.denominator < 0) {
        this.numerator *= -1;
        this.denominator *= -1;
    }
}
Math.Fraction.prototype.calculate = function () {
    return this.numerator / this.denominator;
}
Math.Fraction.prototype.toString = function (delimiter) {
    return this.numerator + (delimiter ? delimiter : "/") + this.denominator;
}
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

Math.Interval.prototype.getStartValue = function () {
    return this.startValue;
}
Math.Interval.prototype.setStartValue = function (startValue) {
    this.startValue = startValue;
}
Math.Interval.prototype.getEndValue = function () {
    return this.endValue;
}
Math.Interval.prototype.setEndValue = function (endValue) {
    this.endValue = endValue;
}
Math.Interval.prototype.getIncludingStart = function () {
    return this.includingStart;
}
Math.Interval.prototype.setIncludingStart = function (includingStart) {
    this.includingStart = includingStart;
}
Math.Interval.prototype.getIncludingEnd = function () {
    return this.includingEnd;
}
Math.Interval.prototype.setIncludingEnd = function (includingEnd) {
    this.includingEnd = endValue;
}
Math.Interval.prototype.toString = function () {
    return (this.includingStart ? "[" : "(") + this.startValue + ", " + this.endValue + (this.includingEnd ? "]" : ")");
}
Math.Interval.prototype.isLeftOpened = function () {
    return (this.includingStart ? false : true);
}
Math.Interval.prototype.isRightOpened = function () {
    return (this.includingEnd ? false : true);
}
Math.Interval.prototype.isOpened = function () {
    return (this.includingStart ? false : (this.includingEnd ? false : true));
}
Math.Interval.prototype.isLeftClosed = function () {
    return (this.includingStart ? true : false);
}
Math.Interval.prototype.isRightClosed = function () {
    return (this.includingEnd ? true : false);
}
Math.Interval.prototype.isClosed = function () {
    return (this.includingStart ? (this.includingEnd ? true : false) : false);
}

//*GEOMETRIC FORMS *//
/*CIRCLE*/
Math.Circle = function (radius) {
    this.radius = radius;
}

Math.Circle.prototype.getDiameter = function () {
    return 2 * this.radius;
}

Math.Circle.prototype.getCircumfenrence = function () {
    return 2 * this.radius * Math.PI;
}

Math.Circle.prototype.getArea = function () {
    return Math.PI * (this.radius * this.radius);
}

Math.Circle.prototype.getArcLength = function (angle) {
    return (angle / 360) * this.getCircumfenrence();
}

Math.Circle.prototype.getArcArea = function (angle) {
    return (angle / 360) * this.getArea();
}
Math.Circle.prototype.getRadius = function () {
    return this.radius;
}
Math.Circle.prototype.setRadius = function (radius) {
    this.radius = radius;
}
Math.Circle.prototype.toBall = function () {
    return new Math.Ball(this.radius);
}

/*BALL*/
Math.Ball = function (radius) {
    this.radius = radius;
}
Math.Ball.prototype.getDiameter = function () {
    return 2 * this.radius;
}
Math.Ball.prototype.getSurface = function () {
    return 4 * Math.PI * (this.radius * this.radius);
}
Math.Ball.prototype.getVolume = function () {
    return (4 / 3) * Math.PI * (this.radius * this.radius * this.radius);
}
Math.Ball.prototype.getRadius = function () {
    return this.radius;
}
Math.Ball.prototype.setRadius = function (radius) {
    this.radius = radius;
}


/* RECTANGLE */
Math.Rectangle = function (width, length) {
    this.width = width;
    this.length = length;
}

Math.Rectangle.prototype.getLength = function () {
    return this.length;
}
Math.Rectangle.prototype.setLength = function (length) {
    this.length = length;
}
Math.Rectangle.prototype.getWidth = function () {
    return this.width;
}
Math.Rectangle.prototype.setWidth = function (width) {
    this.width = width;
}
Math.Rectangle.prototype.getPerimeter = function () {
    return 2 * (this.width + this.length);
}
Math.Rectangle.prototype.isSquare = function () {
    return (this.width == this.length);
}
Math.Rectangle.prototype.getArea = function () {
    return this.width * this.length;
}
Math.Rectangle.prototype.getDiagonal = function () {
    return Math.sqrt((this.width * this.width) + (this.length * this.length));
}
Math.Rectangle.prototype.setSize = function (width, length) {
    this.width = width;
    this.length = length;
}
Math.Rectangle.prototype.getSize = function (delimiter) {
    return this.width + (delimiter ? delimiter : "x") + this.length;
}
Math.Rectangle.prototype.toCuboid = function (height) {
    return new Math.Cuboid(this.width, this.length, height);
}


/* CUBOID */
Math.Cuboid = function (width, length, height) {
    this.width = width;
    this.length = length;
    this.height = height;
}
Math.Cuboid.prototype.getLength = function () {
    return this.length;
}
Math.Cuboid.prototype.setLength = function (length) {
    this.length = length;
}
Math.Cuboid.prototype.getHeight = function () {
    return this.height;
}
Math.Cuboid.prototype.setHeight = function (height) {
    this.height = height;
}
Math.Cuboid.prototype.getWidth = function () {
    return this.width;
}
Math.Cuboid.prototype.setWidth = function (width) {
    this.width = width;
}
Math.Cuboid.prototype.getEdgeLength = function () {
    return 4 * (this.width + this.height + this.length);
}
Math.Cuboid.prototype.isHexaedron = function () {
    return (this.width == this.length && this.length == this.height);
}
Math.Cuboid.prototype.getSurface = function () {
    return 2 * this.width * this.length + 2 * this.width * this.height + 2 * this.length * this.height;
}
Math.Cuboid.prototype.setSize = function (width, length, height) {
    this.width = width;
    this.length = length;
    this.height = height;
}
Math.Cuboid.prototype.getSize = function (delimiter) {
    delimiter = (delimiter ? delimiter : "x");
    return this.width + delimiter + this.length + delimiter + this.height;
}
Math.Cuboid.prototype.getBodyDiagonal = function () {
    return Math.sqrt(this.width * this.width + this.length * this.length + this.height * this.height);
}

/*TRIANGLE*/
Math.Triangle = function (sideA, sideB, sideC) {
    this.a = sideA;
    this.b = sideB;
    this.c = sideC;
}
Math.Triangle.prototype.getSideA = function () {
    return this.a;
}
Math.Triangle.prototype.setSideA = function (sideA) {
    this.a = sideA;
}
Math.Triangle.prototype.getSideB = function () {
    return this.b;
}
Math.Triangle.prototype.setSideB = function (sideB) {
    this.b = sideB;
}
Math.Triangle.prototype.getSideC = function () {
    return this.c;
}
Math.Triangle.prototype.setSideC = function (sideC) {
    this.c = sideC;
}
Math.Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
}
Math.Triangle.prototype.setSize = function (sideA, sideB, sideC) {
    this.a = sideA;
    this.b = sideB;
    this.c = sideC;
}
Math.Triangle.prototype.getHeightA = function () {
    return Math.sin(this.getBeta()) * this.c;
}
Math.Triangle.prototype.getHeightB = function () {
    return Math.sin(this.getGamma()) * this.a;
}
Math.Triangle.prototype.getHeightC = function () {
    return Math.sin(this.getAlpha()) * this.b;
}
Math.Triangle.prototype.getHeights = function () {
    return {
        heightA: this.getHeightA(),
        heightB: this.getHeightB(),
        heightC: this.getHeightC()
    }
}
Math.Triangle.prototype.getGamma = function () {
    return Math.acos((this.c * this.c - this.b * this.b - this.a * this.a) / (-2 * this.a * this.b));
}
Math.Triangle.prototype.getBeta = function () {
    return Math.acos((this.b * this.b - this.a * this.a - this.c * this.c) / (-2 * this.a * this.c));
}
Math.Triangle.prototype.getAlpha = function () {
    return Math.acos((this.a * this.a - this.b * this.b - this.c * this.c) / (-2 * this.b * this.c));
}
Math.Triangle.prototype.getAngles = function () {
    return {
        alpha: this.getAlpha(),
        beta: this.getBeta(),
        gamma: this.getGamma()
    }
}
Math.Triangle.prototype.getArea = function () {
    return ((1 / 2) * this.c) * this.getHeightC();
}
Math.Triangle.prototype.isIsosceles = function () {
    var gamma = this.getGamma();
    var alpha = this.getAlpha();
    var beta = this.getBeta();
    return ((this.a == this.b && this.a != this.c && alpha == beta) || (this.b == this.c && this.b != this.a && beta == gamma) || (this.c == this.a && this.c != this.b && alpha == gamma));
}
Math.Triangle.prototype.isEquilateral = function () {
    return (this.a == this.b && this.b == this.c && this.getAlpha() == this.getGamma() && this.getAlpha() == this.getBeta());
}
Math.Triangle.prototype.isRightAngled = function () {
    return (this.getAlpha() == 90 || this.getBeta() == 90 || this.getGamma() == 90);
}
Math.Triangle.prototype.isTriangle = function () {
    return !(this.a + this.b == this.c || this.b + this.c == this.a || this.c + this.a == this.b);
}


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

//Gets the mode
Math.Term.prototype.getMode = function () {
    return this.mode;
}

//Gets the term
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
Math.Function.prototype = new Math.Term();
Math.Function.prototype.isCorrectAlphabet = function () {
    return Math.isCorrectAlphabet(this.term.replace(/x/g, " "), this.alphabet);
}
//Calculates the term and returns the result
Math.Function.prototype.calculate = function (x) {
    return Math.calculate(this.term.replace(/x/g, x), this.mode);
}
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
Math.Function.prototype.getYIntercept = function () {
    return this.calculate(0);
}
Math.Function.prototype.toString = function () {
    this.correctTerm();
    return "f(x)=" + this.term;
}

//*SHORTCUTS*//
function interval(a, b, c, d) {
    return new Math.Interval(a, b, c, d);
}

function term(a, b) {
    return new Math.Term(a, b);
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

//Gets the factor used to calculate the different settings DEG, RAD, GRA, defaults to DEG
function getModeSetting(mode) {
    var setting = "/ 180 * " + Math.PI;
    if (mode == "RAD") setting = "";
    if (mode == "GRA") setting = "/ 400 * 360 / 180 * " + Math.PI;
    return setting;
};

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
