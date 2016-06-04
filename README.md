
# Calculate.js ##

**Calculate.js** is kind of an **extension** to the javascript build-in **Math-Library**.   

## Usage ##
Download the latest minified [release](https://github.com/rofrischmann/Calculate.js/releases/tag/v1.0) and import it within your project.    
```html
<script type="text/javascript" src="calculate.min.js"></script>

```    
## Abilities ##
* a **powerful term-parser** that supports all popular math functions like *sin, cos, tan, log, sqrt or pow*.
* 33 additional Math-Class extensions
* Geometric classes like **Circle, Ball, Cylinder, Rectangle, Triangle, Cuboid**
* **Term** and **Function** classes to parse and calculate any mathmatical function
* **Fraction, Interval** and **Relations** classes to handle those

## Coming Soon ##
* **Vectors, Matrizes** and **Complex** Numbers
* More **Function**-abilities
* Physical **Units**
* More **Geometric** classes like **Pyramid**


# **Examples**#
     
## Extensions ##
```javascript 
Calculate.checksum(12345)                       //returns 15
Calculate.isPrime(7)                            //returns true
Calculate.isPrime(6)                            //returns false
Calculate.nextPrime(7, 3, true)                 //returns 13
Calculate.getGreatestCommonFactor(16, 72)       //returns 8
Calculate.logarithm(22, 3)                      //returns 2.813588...
```  


## Parser ##
```javascript 
Parser.calculate("sin(23) + 3")                 //returns 3,39073...
Parser.calculate("sin(23) + 3", "RAD")          //returns 2,15377...
Parser.calculate("2+3*sqrt(12-sin(45)) + 5")    //returns 17,08147...
```  

## Function ##
```javascript 
var fx = new Function("2*sin(x-3)+sqrt(2^3)")               
fx.calculate(4.5)                               //calculates with x=4.5 and returns 2.88078...
fx.getYIntercept()                              //returns y-axes intercept 2.72375...
fx.getTableOfValues(new Interval(-10, 10), 1))  //returns all calculated values from -10 to 10 in steps of 1 (-10, -9, ..., 8, 9, 10)
``` 

## Fraction ##
```javascript 
var fraction = new Fraction(14, 18)               
fraction.add(2)                                 //adds 36/18 to the fraction
fraction.cancel()                               //cancels to 25/9
fraction.calculate()                            //returns 1.38888...
```  

## Circle ##
```javascript 
var circle = new Circle(5)               
circle.getArea()                                //returns 78.53981...
circle.setRadius(10)                            //sets the radius to 10
circle.getArcLength(120)                        //returns 20.943951...
circle.toBall()                                 //returns a Ball with radius=10
```       
## License
Calculate.js is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Contributing
If you've got something useful just create a pull request or let me know and I'll add it.   
Created by [Robin Frischmann](http://rofrischmann.de).
