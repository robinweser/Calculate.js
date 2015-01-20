var Term = function (term, mode) {
    this.term = term;
    this.mode = (mode ? mode : "DEG");

    this.alphabet = Parser.alphabet;
    //Corrects and returns the term
    this.correctTerm = function () {
        this.term = Parser.correctTerm(this.term);
    }

    //Calculates the term and returns the result
    this.calculate = function () {
        return Parser.calculate(this.term, this.mode);
    }
    //Sets the mode, "DEG", "GRA" or "RAD"
    this.setMode = function (mode) {
        this.mode = mode;
    }

    //Returns the mode
    this.getMode = function () {
        return this.mode;
    }

    //Returns the term
    this.getTerm = function () {
        return this.term;
    }

    //Sets the new term
    this.setTerm = function (term) {
        this.term = term;
    }

    //Checks if the term uses the correct alphabet
    this.isCorrectAlphabet = function () {
        return Parser.isCorrectAlphabet(this.term, this.alphabet);
    }

    //Checks if the term has its brackets set correct
    this.isCorrectBrackets = function () {
        return Parser.isCorrectBrackets(this.term);
    }
}

Function.prototype = new Term();