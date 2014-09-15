/*===========================================================================

   calculateMe.js is kind of an extension to the JavaScript build-in Math-Library.
   Check https://bitbucket.org/Grindelwald/calculateme.js for more information

   Current Version: 0.0.1
                    September 15 2014

   Author(s): Robin Frischmann
   License: CPOL : The Code Project Open License 1.02
            http://www.codeproject.com/info/cpol10.aspx

   If you modify this code please add your name and what was modified to this
   header, as well as the date modified.

 ===========================================================================*/



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


/* MATH-EXTENSIONS  */
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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
Math.Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
}

Math.Rectangle.prototype.getHeight = function () {
    return this.height;
}
Math.Rectangle.prototype.setHeight = function (height) {
    this.height = height;
}
Math.Rectangle.prototype.getWidth = function () {
    return this.width;
}
Math.Rectangle.prototype.setWidth = function (width) {
    this.width = width;
}
Math.Rectangle.prototype.getPerimeter = function () {
    return 2 * (this.width + this.height);
}
Math.Rectangle.prototype.isSquare = function () {
    return (this.width == this.height);
}
Math.Rectangle.prototype.getArea = functon() {
    return this.width * this.height;
}
Math.Rectangle.prototype.getDiagonal = function () {
    return Math.sqrt((this.width * this.width) + (this.height * this.height));
}
Math.Rectangle.prototype.setSize(width, height) {
    this.width = width;
    this.height = height;
}
Math.Rectangle.prototype.getSize = function (delimiter) {
    return this.width + (delimiter ? delimiter : "x") + this.height;
}
Math.Rectangle.prototype.toCuboid = function (height) {
    //TODO
}
