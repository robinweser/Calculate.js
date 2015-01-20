var Triangle = function (sideA, sideB, sideC) {
    this.a = sideA;
    this.b = sideB;
    this.c = sideC;

    //Returns the side a
    this.getSideA = function () {
        return this.a;
    }

    //Sets the side a
    this.setSideA = function (sideA) {
        this.a = sideA;
    }

    //Returns the side b
    this.getSideB = function () {
        return this.b;
    }

    //Sets the side b
    this.setSideB = function (sideB) {
        this.b = sideB;
    }

    //Returns the side c
    this.getSideC = function () {
        return this.c;
    }

    //Sets the side c
    this.setSideC = function (sideC) {
        this.c = sideC;
    }

    //Calculates the perimeter
    this.getPerimeter = function () {
        return this.a + this.b + this.c;
    }

    //Sets the (new) size
    this.setSize = function (sideA, sideB, sideC) {
        this.a = sideA;
        this.b = sideB;
        this.c = sideC;
    }

    //Calculates the height to the base side a
    this.getHeightA = function () {
        return Math.sin(this.getBeta()) * this.c;
    }

    //Calculates the height to the base side b
    this.getHeightB = function () {
        return Math.sin(this.getGamma()) * this.a;
    }

    //Calculates the height to the base side c
    this.getHeightC = function () {
        return Math.sin(this.getAlpha()) * this.b;
    }

    //Calculates the heights
    this.getHeights = function () {
        return {
            heightA: this.getHeightA(),
            heightB: this.getHeightB(),
            heightC: this.getHeightC()
        }
    }

    //Calculates the angle gamma
    this.getGamma = function () {
        return Math.acos((this.c * this.c - this.b * this.b - this.a * this.a) / (-2 * this.a * this.b));
    }

    //Calculates the angle beta
    this.getBeta = function () {
        return Math.acos((this.b * this.b - this.a * this.a - this.c * this.c) / (-2 * this.a * this.c));
    }

    //Calculates the angle alpha
    this.getAlpha = function () {
        return Math.acos((this.a * this.a - this.b * this.b - this.c * this.c) / (-2 * this.b * this.c));
    }

    //Calculates the angles
    this.getAngles = function () {
        return {
            alpha: this.getAlpha(),
            beta: this.getBeta(),
            gamma: this.getGamma()
        }
    }

    //Calculates the angle area
    this.getArea = function () {
        return ((1 / 2) * this.c) * this.getHeightC();
    }

    //Checks if the triangle is isosceles
    this.isIsosceles = function () {
        var gamma = this.getGamma();
        var alpha = this.getAlpha();
        var beta = this.getBeta();
        return ((this.a == this.b && this.a != this.c && alpha == beta) || (this.b == this.c && this.b != this.a && beta == gamma) || (this.c == this.a && this.c != this.b && alpha == gamma));
    }

    //Checks if the triangle is equilateral
    this.isEquilateral = function () {
        return (this.a == this.b && this.b == this.c && this.getAlpha() == this.getGamma() && this.getAlpha() == this.getBeta());
    }

    //Checks if the triangle is rightAngled
    this.isRightAngled = function () {
        return (this.getAlpha() == 90 || this.getBeta() == 90 || this.getGamma() == 90);
    }

    //Checks if the triangle actually is a triangle (e.g. Triangle(1,2,3) is not a triangle)
    this.isTriangle = function () {
        return !(this.a + this.b == this.c || this.b + this.c == this.a || this.c + this.a == this.b);
    }
}