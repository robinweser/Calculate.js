var Interval = function (startValue, endValue, includingStart, includingEnd) {
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


    //Returns the start value
    this.getStartValue = function () {
        return this.startValue;
    }

    //Sets the start value
    this.setStartValue = function (startValue) {
        this.startValue = startValue;
    }

    //Returns the end value
    this.getEndValue = function () {
        return this.endValue;
    }

    //Sets the start value
    this.setEndValue = function (endValue) {
        this.endValue = endValue;
    }

    //Returns weather the start value is included
    this.getIncludingStart = function () {
        return this.includingStart;
    }

    //Sets weather the start value is included
    this.setIncludingStart = function (includingStart) {
        this.includingStart = includingStart;
    }

    //Returns weather the end value is included
    this.getIncludingEnd = function () {
        return this.includingEnd;
    }

    //Sets weather the start value is included
    this.setIncludingEnd = function (includingEnd) {
        this.includingEnd = endValue;
    }

    //Converts the Interval to a standard interval-notation string
    this.toString = function () {
        return (this.includingStart ? "[" : "(") + this.startValue + ", " + this.endValue + (this.includingEnd ? "]" : ")");
    }

    //Checks if the interval is left opened
    this.isLeftOpened = function () {
        return (this.includingStart ? false : true);
    }

    //Checks if the interval is right opened
    this.isRightOpened = function () {
        return (this.includingEnd ? false : true);
    }

    //Checks if the interval is opened
    this.isOpened = function () {
        return (this.includingStart ? false : (this.includingEnd ? false : true));
    }

    //Checks if the interval is left closed
    this.isLeftClosed = function () {
        return (this.includingStart ? true : false);
    }
    //Checks if the interval is right closed
    this.isRightClosed = function () {
        return (this.includingEnd ? true : false);
    }

    //Checks if the interval is closed
    this.isClosed = function () {
        return (this.includingStart ? (this.includingEnd ? true : false) : false);
    }
}