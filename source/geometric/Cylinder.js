var Cylinder = function(radius,height){
    this.radius = radius;
    this.height = height;
    this.circle = new Circle(this.radius);

    //Returns the radius
    this.getRadius = function(){
    	return this.radius;
    }

    //Sets the radius
    this.setRadius = function(radius){
    	this.radius = radius;
    }

    //Returns the height
    this.getHeight = function(){
    	return this.height;
    }
    //Sets the height
    this.setHeight = function(height){
        this.height =  height;		
    }

    //Returns the area of the cylinder, both the lateral surface area and top/bottom area.
    this.getArea = function(){
    	return (2*this.circle.getArea()) + (this.circle.getCircumference()*this.height);
    }

    //Returns the rectangle area that holds the cylinder
    this.getLateralSurfaceArea = function(){
     	return this.circle.getCircumference()*this.height;	
    }

    //Returns the top/bottom area
    this.getBaseArea = function(){
        return 2*this.circle.getArea();         
    }

    //Returns the volumen of the cylinder
    this.getVolume = function(){
        return (this.circle.getArea())*this.height;  			
    }

    //Returns circle of the cylinder.
    this.getCircle = function(){
    	return this.circle;
    }

}