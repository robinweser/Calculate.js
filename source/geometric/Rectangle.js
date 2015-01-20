var Rectangle = function (width, length) {
    this.width = width;
    this.length = length;

    //Returns the length
    this.getLength = function () {
        return this.length;
    }

    //Sets the length
    this.setLength = function (length) {
        this.length = length;
    }

    //Returns the width
    this.getWidth = function () {
        return this.width;
    }

    //Sets the length
    this.setWidth = function (width) {
        this.width = width;
    }

    //Calculates the perimeter
    this.getPerimeter = function () {
        return 2 * (this.width + this.length);
    }

    //Checks if the rectangle is a square
    this.isSquare = function () {
        return (this.width == this.length);
    }

    //Calculates the area
    this.getArea = function () {
        return this.width * this.length;
    }

    //Calculates the diagonal
    this.getDiagonal = function () {
        return Math.sqrt((this.width * this.width) + (this.length * this.length));
    }

    //Sets the (new) size
    this.setSize = function (width, length) {
        this.width = width;
        this.length = length;
    }

    //Returns the size as a standard rectangle-notation string with a given delimiter
    this.getSize = function (delimiter) {
        return this.width + (delimiter ? delimiter : "x") + this.length;
    }

    //Converts to a cuboid with a specific height
    this.toCuboid = function (height) {
        return new Cuboid(this.width, this.length, height);
    }
}