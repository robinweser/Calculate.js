var Function = function (term, mode) {
    this.term = term;
    this.mode = (mode ? mode : "DEG");

    //Checks if the function uses the correct alphabet including "x"
    this.isCorrectAlphabet = function () {
        return Parser.isCorrectAlphabet(this.term.replace(/x/g, " "), this.alphabet);
    }

    //Calculates the term and returns the result
    this.calculate = function (x) {
        return Parser.calculate(this.term.replace(/x/g, x), this.mode);
    }

    //Calcultes a whole table of values in a given interval in specific steps
    this.getTableOfValues = function (startValue, endValue, steps) {
        var tableOfValues = {};
        var start, end;
        if (startValue instanceof Interval) {
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
    this.getYIntercept = function () {
        return this.calculate(0);
    }

    //Converts the function into a standard function-notation string
    this.toString = function () {
        this.correctTerm();
        return "f(x)=" + this.term;
    }
}