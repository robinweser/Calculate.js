var Ball = function (radius) {
    this.radius = radius;

    //Calculates the diameter
    this.getDiameter = function () {
        return 2 * this.radius;
    }

    //Calculates the surface
    this.getSurface = function () {
        return 4 * Math.PI * (this.radius * this.radius);
    }

    //Calculates the volume
    this.getVolume = function () {
        return (4 / 3) * Math.PI * (this.radius * this.radius * this.radius);
    }

    //Returns the radius
    this.getRadius = function () {
        return this.radius;
    }

    //Sets the radius
    this.setRadius = function (radius) {
        this.radius = radius;
    }

    //Coverts the ball to a Circle
    this.toCircle = function () {
        return new Circle(this.radius);
    }
}