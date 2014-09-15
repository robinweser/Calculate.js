//Returns a therm with only addition/substraction until a multiplication/division starts
function addUntil(therm) {
    var i = 0;
    if (therm.indexOf("*") != -1 || therm.indexOf("/") != -1) {
        while (therm.substr(i, 1).indexOf("*") == -1 && therm.substr(i, 1).indexOf("/") == -1 && therm.length > i + 1)++i;
        return therm.substr(0, Math.max(1, i));
    } else return therm;
};

//Gets the factor used to calculate the different settings DEG, RAD, GRA, defaults to DEG
function getModeSetting(mode) {
    var setting = "/ 180 * " + Math.PI;
    if (mode == "RAD") setting = "";
    if (mode == "GRA") setting = "/ 400 * 360 / 180 * " + Math.PI;
    return setting;
};


/* MATH-EXTENSIONS  */
/* THERM-PARSER */
//Contains all alternative notation possibilities that can also be used to define a therm
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

//Contains the whole alphabet with which a therm is constructed
Math.alphabet = ["e", "pi", "ln(", "lg(", "tan(", "sin(", "cos(", "sqrt(", "|(", ".", " ", ",", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "(", ")", "+", "-", "*", "/", "^"];

//Calculates a simple therm only containing addition, substraction, multiplication and division
Math.parseSimpleTherm = function (therm) {
    var erg = 0.0;
    var tempLeft, tempRight, tempOperator;
    var tempTherm;
    var addition = therm.split('+');
    var i = 0;
    while (i <= addition.length - 1) {
        tempTherm = addition[i];
        tempTherm = tempTherm.replace("--", "+");
        tempTherm = tempTherm.replace("+-", "-");
        while (tempTherm.indexOf('*') != -1 || tempTherm.indexOf('/') != -1) {
            tempLeft = addUntil(tempTherm);
            tempOperator = tempTherm.substr(tempLeft.length, 1);
            tempRight = addUntil(tempTherm.substr(tempLeft.length + 1, tempTherm.length - (tempLeft.length) - 1));
            if (tempRight == "" || tempLeft == "") {
                return "wrong";
            }
            if (tempOperator.indexOf("*") != -1) tempTherm = tempTherm.replace(tempTherm.substr(0, tempLeft.length + 1 + tempRight.length), (tempLeft * tempRight));
            if (tempOperator.indexOf("/") != -1) tempTherm = tempTherm.replace(tempTherm.substr(0, tempLeft.length + 1 + tempRight.length), (tempLeft / tempRight));
        }
        erg += parseFloat(tempTherm);
        ++i;
    }
    return erg;
};

//Calcules a simple therm also containing brackets
Math.parseBracketTherm = function (therm, mode) {
    var i = 0;
    var start = 0;
    var row = 1;
    if (therm.indexOf("(") != -1) {
        while (therm.indexOf("(") != -1) {
            while (row > 0) {
                if (therm.substr(i, 1) == "(") {
                    start = i + 1;
                    row = 1;
                }
                if (therm.substr(i, 1) == ")") {
                    --row;
                    break;
                }
                ++i;
            }
            therm = therm.replace("(" + therm.substr(start, i - start + 1), Math.parseTherm(therm.substr(start, i - start), mode));
            row = 1;
            i = 0;
            start = 0;
        }
    }
    return therm;
};

//Calculates a sinus considering the selected mode  (default = DEG)
Math.parseSin = function (therm, mode) {
    var row = 1;
    var i = 1;
    var actual;
    if (therm.indexOf("sin") != -1) {
        var splitSin = therm.split('sin');
        for (var p = 1; p <= splitSin.length - 1; ++p) {
            actual = splitSin[p];
            while (row > 0) {
                if (actual.substr(i, 1) == "(")++row;
                if (actual.substr(i, 1) == ")")--row;
                ++i;
            }
            therm = therm.replace("sin" + actual.substr(0, i), Math.sin(Math.parseTherm("(" + actual.substr(0, i) + getModeSetting(mode) + ")", mode)));
            row = 1;
            i = 1;
        }
    }
    return therm;
};

//Calculates a cosinus considering the selected mode (default = DEG)
Math.parseCos = function (therm, mode) {
    var row = 1;
    var i = 1;
    var actual;
    if (therm.indexOf("cos") != -1) {
        var splitCos = therm.split('cos');
        for (var p = 1; p <= splitCos.length - 1; ++p) {
            actual = splitCos[p];
            while (row > 0) {
                if (actual.substr(i, 1) == "(")++row;
                if (actual.substr(i, 1) == ")")--row;
                ++i;
            }
            therm = therm.replace("cos" + actual.substr(0, i), Math.cos(Math.parseTherm("(" + actual.substr(0, i) + getModeSetting(mode) + ")", mode)));
            row = 1;
            i = 1;
        }
    }
    return therm;
};

//Calculates a tangens considering the selected mode  (default = DEG)
Math.parseTan = function (therm, mode) {
    var row = 1;
    var i = 1;
    var actual;
    if (therm.indexOf("tan") != -1) {
        var splitTan = therm.split('tan');
        for (var p = 1; p <= splitTan.length - 1; ++p) {
            actual = splitTan[p];
            while (row > 0) {
                if (actual.substr(i, 1) == "(")++row;
                if (actual.substr(i, 1) == ")")--row;
                ++i;
            }
            therm = therm.replace("tan" + actual.substr(0, i), Math.tan(Math.parseTherm("(" + actual.substr(0, i) + getModeSetting(mode) + ")", mode)));
            row = 1;
            i = 1;
        }
    }
    return therm;
};

//Calculates an absolute value
Math.parseAbs = function (therm, mode) {
    var row = 1;
    var i = 1;
    var actual;
    if (therm.indexOf("|") != -1) {
        var splitSin = therm.split('|');
        for (var p = 1; p <= splitSin.length - 1; ++p) {
            actual = splitSin[p];
            while (row > 0) {
                if (actual.substr(i, 1) == "(")++row;
                if (actual.substr(i, 1) == ")")--row;
                ++i;
            }
            therm = therm.replace("|" + actual.substr(0, i), Math.abs(Math.parseTherm("(" + actual.substr(0, i) + ")", mode)));
            row = 1;
            i = 1;
        }
    }
    return therm;
};

//Calculates a logarithmus
Math.parseLog = function (therm, mode) {
    var row = 1;
    var i = 1;
    var actual;
    if (therm.indexOf("ln") != -1) {
        var splitLn = therm.split('ln');
        for (var p = 1; p <= splitLn.length - 1; ++p) {
            actual = splitLn[p];
            while (row > 0) {
                if (actual.substr(i, 1) == "(")
                ++row;
                if (actual.substr(i, 1) == ")")
                --row;
                ++i;
            }
            therm = therm.replace("ln" + actual.substr(0, i), Math.log(Math.parseTherm("(" + actual.substr(0, i) + ")", mode)));
            row = 1;
            i = 1;
        }
    }
    if (therm.indexOf("lg") != -1) {
        var splitLg = therm.split('lg');
        for (var p = 1; p <= splitLg.length - 1; ++p) {
            actual = splitLg[p];
            while (row > 0) {
                if (actual.substr(i, 1) == "(")
                ++row;
                if (actual.substr(i, 1) == ")")
                --row;
                ++i;
            }
            therm = therm.replace("lg" + actual.substr(0, i), (Math.log(Math.parseTherm("(" + actual.substr(0, i) + ")", mode)) / Math.LN10));
            row = 1;
            i = 1;
        }
    }
    return therm;
};

//Calculates a squareroot
Math.parseSqr = function (therm, mode) {
    var row = 1;
    var i = 1;
    var actual;
    if (therm.indexOf("sqrt") != -1) {
        var splitSqr = therm.split('sqrt');
        for (var p = 1; p <= splitSqr.length - 1; ++p) {
            actual = splitSqr[p];
            while (row > 0) {
                if (actual.substr(i, 1) == "(")++row;
                if (actual.substr(i, 1) == ")")--row;
                ++i;
            }
            therm = therm.replace("sqrt" + actual.substr(0, i), Math.sqrt(Math.parseTherm("(" + actual.substr(0, i) + ")", mode)));
            row = 1;
            i = 1;
        }
    }
    return therm;
};

//Calculates a pow with any base and exponent
Math.parsePow = function (therm, mode) {
    var row = 0;
    var i = 1;
    var j = 0;
    var left, right;
    while (therm.indexOf("^") != -1) {
        var splitPow = therm.split('^');
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
        therm = therm.replace(left.substr(left.length - i + 1, i - 1) + "^" + right.substr(0, j), Math.pow(Math.parseTherm(left.substr(left.length - i + 1, i - 1), mode), Math.parseTherm(right.substr(0, j), mode)));
        i = 1;
        j = 0;
    }
    return therm;
};

//Calculates a full therm with the whole alphabet considering the selected mode  (default = DEG)
Math.parseTherm = function (therm, mode) {
    therm = therm.replace("--", "+");
    therm = Math.parseAbs(therm, mode);
    therm = Math.parsePow(therm, mode);
    therm = Math.parseLog(therm, mode);
    therm = Math.parseSin(therm, mode);
    therm = Math.parseTan(therm, mode);
    therm = Math.parseCos(therm, mode);
    therm = Math.parseSqr(therm, mode);
    therm = Math.parseSimpleTherm(Math.parseBracketTherm(therm, mode));
    return therm;
};

//Corrects a therm as much as possible (wrong operators, right alphabet)
Math.correctTherm = function (therm) {
    if (therm.substr(0, 1) == "-") therm = "(-1)*" + therm.substr(1, therm.length - 1);
    therm = therm.toLowerCase();
    for (item in Math.alternativeNotation) {
        while (therm.indexOf(item) != -1) {
            therm = therm.replace(item, Math.alternativeNotation[item]);
        }
    }
    therm = therm.replace("--", "+");
    therm = therm.replace("+-", "-");
    for (var i = 0; i <= therm.length - 1; ++i) {
        if (therm.substr(i, 1).indexOf("-") == 0) {
            if (therm.substr(i - 1, 1).indexOf("(") == -1 && therm.substr(i - 1, 1).indexOf("/") == -1 && therm.substr(i - 1, 1).indexOf("*") == -1 && therm.substr(i - 1, 1).indexOf("^") == -1 && therm.substr(i - 1, 1).indexOf("-") == -1) {
                therm = therm.substr(0, i) + "+" + therm.substr(i, therm.length - i);
                ++i;
            }
        }
    }
    therm = therm.toLowerCase();
    return therm;
};

//Checks if a therm has its brackets set correct
Math.isCorrectBrackets = function (therm) {
    var row = 0;
    if (therm.indexOf("()") != -1) {
        return false;
    };
    for (var i = 0; i < therm.length; ++i) {
        if (therm.substr(i, 1) == "(")++row;
        if (therm.substr(i, 1) == ")")--row;
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

//Checks if a therm uses the correct alphabet
Math.isCorrectAlphabet = function (therm) {
    for (var i = 0; i < Math.alphabet.length; ++i) {
        while (therm.indexOf(Math.alphabet[i]) != -1) {
            therm = therm.replace(Math.alphabet[i], "");
        }
    }
    if (therm.length == 0) {
        return true;
    } else {
        return false;
    }
};

//USE THIS ONE TO FINALLY CALCULATE
//Returns the calculated therm with all settings, checks and selected mode (default = DEG)
Math.calculate = function (therm, mode) {
    therm = Math.correctTherm(therm);
    if (Math.isCorrectBrackets(therm)) {
        if (Math.isCorrectAlphabet(therm)) {
            var erg = Math.parseTherm(therm, mode);
            if (erg.toString() == "NaN" || erg.toString() == "wrong") {
                return "Invalid therm. Something caused the parser to crash.";
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
