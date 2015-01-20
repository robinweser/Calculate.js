var Circle = function (radius) {
    this.radius = radius;

    //Calculates the diameter
    this.getDiameter = function () {
        return 2 * this.radius;
    }

    //Calculates the circumference
    this.getCircumference = function () {
        return 2 * this.radius * Math.PI;
    }

    //Calculates the area
    this.getArea = function () {
        return Math.PI * (this.radius * this.radius);
    }

    //Calculates the arc length of an angle
    this.getArcLength = function (angle) {
        return (angle / 360) * this.getCircumfenrence();
    }

    //Calculates the arc area of an angle
    this.getArcArea = function (angle) {
        return (angle / 360) * this.getArea();
    }

    //Returns the radius
    this.getRadius = function () {
        return this.radius;
    }

    //Sets the radius
    this.setRadius = function (radius) {
        this.radius = radius;
    }

    //Converts the circle to a Ball
    this.toBall = function () {
        return new Ball(this.radius);
    }
}