var Cuboid = function (width, length, height) {
    this.width = width;
    this.length = length;
    this.height = height;

    //Returns the length
    this.getLength = function () {
        return this.length;
    }

    //Sets the length
    this.setLength = function (length) {
        this.length = length;
    }

    //Returns the height
    this.getHeight = function () {
        return this.height;
    }

    //Sets the height
    this.setHeight = function (height) {
        this.height = height;
    }

    //Returns the width
    this.getWidth = function () {
        return this.width;
    }

    //Sets the width
    this.setWidth = function (width) {
        this.width = width;
    }

    //Calculates the edge length
    this.getEdgeLength = function () {
        return 4 * (this.width + this.height + this.length);
    }

    //Checks if the cuboid is a hexaedron
    this.isHexaedron = function () {
        return (this.width == this.length && this.length == this.height);
    }

    //Calculates the surface
    this.getSurface = function () {
        return 2 * this.width * this.length + 2 * this.width * this.height + 2 * this.length * this.height;
    }

    //Sets the (new) size
    this.setSize = function (width, length, height) {
        this.width = width;
        this.length = length;
        this.height = height;
    }

    //Returns the size
    this.getSize = function (delimiter) {
        delimiter = (delimiter ? delimiter : "x");
        return this.width + delimiter + this.length + delimiter + this.height;
    }

    //Calculates the body diagonal
    this.getBodyDiagonal = function () {
        return Math.sqrt(this.width * this.width + this.length * this.length + this.height * this.height);
    }
}