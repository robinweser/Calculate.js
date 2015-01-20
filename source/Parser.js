var Parser = {
    //Contains all alternative notation possibilities that can also be used to define a term
    alternativeNotation: {
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
    },

    //Contains the whole alphabet with which a term is constructed
    alphabet: ["e", "pi", "ln(", "lg(", "tan(", "sin(", "cos(", "sqrt(", "|(", ".", " ", ",", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "(", ")", "+", "-", "*", "/", "^"],

    //Calculates a simple term only containing addition, substraction, multiplication and division
    parseSimpleTerm: function (term) {
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
    },

    //Calcules a simple term also containing brackets
    parseBracketTerm: function (term, mode) {
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
                term = term.replace("(" + term.substr(start, i - start + 1), this.parseTerm(term.substr(start, i - start), mode));
                row = 1;
                i = 0;
                start = 0;
            }
        }
        return term;
    },

    //Calculates a sinus considering the selected mode  (default = DEG)
    parseSin: function (term, mode) {
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
                term = term.replace("sin" + actual.substr(0, i), Math.sin(this.parseTerm("(" + actual.substr(0, i) + getModeSetting(mode) + ")", mode)));
                row = 1;
                i = 1;
            }
        }
        return term;
    },

    //Calculates a cosinus considering the selected mode (default = DEG)
    parseCos: function (term, mode) {
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
                term = term.replace("cos" + actual.substr(0, i), Math.cos(this.parseTerm("(" + actual.substr(0, i) + getModeSetting(mode) + ")", mode)));
                row = 1;
                i = 1;
            }
        }
        return term;
    },

    //Calculates a tangens considering the selected mode  (default = DEG)
    parseTan: function (term, mode) {
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
                term = term.replace("tan" + actual.substr(0, i), Math.tan(this.parseTerm("(" + actual.substr(0, i) + getModeSetting(mode) + ")", mode)));
                row = 1;
                i = 1;
            }
        }
        return term;
    },

    //Calculates an absolute value
    parseAbs: function (term, mode) {
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
                term = term.replace("|" + actual.substr(0, i), Math.abs(this.parseTerm("(" + actual.substr(0, i) + ")", mode)));
                row = 1;
                i = 1;
            }
        }
        return term;
    },

    //Calculates a logarithmus
    parseLog: function (term, mode) {
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
                term = term.replace("ln" + actual.substr(0, i), Math.log(this.parseTerm("(" + actual.substr(0, i) + ")", mode)));
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
                term = term.replace("lg" + actual.substr(0, i), (Math.log(this.parseTerm("(" + actual.substr(0, i) + ")", mode)) / Math.LN10));
                row = 1;
                i = 1;
            }
        }
        return term;
    },

    //Calculates a squareroot
    parseSqr: function (term, mode) {
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
                term = term.replace("sqrt" + actual.substr(0, i), Math.sqrt(this.parseTerm("(" + actual.substr(0, i) + ")", mode)));
                row = 1;
                i = 1;
            }
        }
        return term;
    },

    //Calculates a pow with any base and exponent
    parsePow: function (term, mode) {
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
            term = term.replace(left.substr(left.length - i + 1, i - 1) + "^" + right.substr(0, j), Math.pow(this.parseTerm(left.substr(left.length - i + 1, i - 1), mode), this.parseTerm(right.substr(0, j), mode)));
            i = 1;
            j = 0;
        }
        return term;
    },

    //Calculates a full term with the whole alphabet considering the selected mode  (default = DEG)
    parseTerm: function (term, mode) {
        term = term.replace("--", "+");
        term = this.parseAbs(term, mode);
        term = this.parsePow(term, mode);
        term = this.parseLog(term, mode);
        term = this.parseSin(term, mode);
        term = this.parseTan(term, mode);
        term = this.parseCos(term, mode);
        term = this.parseSqr(term, mode);
        term = this.parseSimpleTerm(this.parseBracketTerm(term, mode));
        return term;
    },

    //Corrects a term as much as possible (wrong operators, right alphabet)
    correctTerm: function (term) {
        if (term.substr(0, 1) == "-") term = "(-1)*" + term.substr(1, term.length - 1);
        term = term.toLowerCase();
        for (item in this.alternativeNotation) {
            while (term.indexOf(item) != -1) {
                term = term.replace(item, this.alternativeNotation[item]);
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
    },

    //Checks if a term has its brackets set correct
    isCorrectBrackets: function (term) {
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
    },

    //Checks if a term uses the correct alphabet
    isCorrectAlphabet: function (term, alphabet) {
        alphabet = (alphabet ? alphabet : this.alphabet);
        for (var i = 0; i < this.alphabet.length; ++i) {
            while (term.indexOf(alphabet[i]) != -1) {
                term = term.replace(alphabet[i], "");
            }
        }
        if (term.length == 0) {
            return true;
        } else {
            return false;
        }
    },

    //USE THIS ONE TO FINALLY CALCULATE
    //Returns the calculated term with all settings, checks and selected mode (default = DEG)
    calculate: function (term, mode) {
        term = this.correctTerm(term);
        if (this.isCorrectBrackets(term)) {
            if (this.isCorrectAlphabet(term)) {
                var erg = this.parseTerm(term, mode);
                if (erg.toString() == "NaN" || erg.toString() == "wrong") {
                    return "Invalid term. Something caused the parser to crash.";
                } else {
                    return erg;
                }
            } else {
                return "Invalid notation. You did not only use chars of the alphabet only.";
            }
        } else {
            return "Invalid brackets. You might have not closed all the brackets."
        }
    }
}