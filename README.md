# calculate.js #
----------------------------------- 
**Current Version**: 1.0.0 *(September 22 2014)*   
**Author(s)**: Robin Frischmann   
**License**: MIT License (http://opensource.org/licenses/mit-license.php)
-----------------------------------
    
**calculate.js** is kind of an **extension** to the JavaScript build-in **Math-Library**.   

## Abilities ##
* a **powerful term-parser** that supports all popular math functions like *sin, cos, tan, log, sqrt or pow*.
* 33 additional Math-Class extensions
* Geometric classes like **Circle, Ball, Rectangle, Triangle, Cuboid**
* **Term** and** Function** classes to parse and calculate any mathmatical function
* **Fraction, Interval** and **Relations** classes to handle those

## Coming Soon ##
* **Vectors, Matrizes** and **Complex** Numbers
* More **Function**-abilities
* Physical **Units**
* More **Geometric** classes like **Pyramid**

-----------------------------------
# **How to use** #


Just download **[calculate.js](https://bitbucket.org/unverschaemt/calculateme.js/downloads/calculateMe%5Bversion1.0.0-22.09.2014%5D.zip)** and import it within your project.    
```
#!html
<script type="text/javascript" src="calculate.js"></script>

```    
    
    
Now you can use all given functions and classes within the **Math-Numerator**.     

-----------------------------------------------------------

# **Examples**#
     
## Extensions ##
```
#!javascript 
Math.checksum(12345)                        //=15
Math.isPrime(7)                             //=true
Math.isPrime(6)                             //=false
Math.nextPrime(7, 3, true)                  //=13
Math.getGreatestCommonFactor(16, 72)        //=8
Math.logarithm(22, 3)                       //=2.813588~
```  


## Parser ##
```
#!javascript 
Math.calculate("sin(23) + 3")               //=3,39073~
Math.calculate("sin(23) + 3", "RAD")        //=2,15377~
Math.calculate("2+3*sqrt(12-sin(45)) + 5")  //=17,08147~
```  

## Fraction ##
```
#!javascript 
var fraction = new Math.Fraction(14, 18)               
fraction.add(2)                             //Math.Fraction(50, 18)
fraction.cancel()                           //Math.Fraction(25, 9)
fraction.calculate()                        //=1.38888~
```  

## Circle ##
```
#!javascript 
var circle = new Math.Circle(5)               
circle.getArea()                            //=78.53981~
circle.setRadius(10)                        //Math.Cirlce(10)
circle.getArcLength(120)                    //=20.943951~
circle.toBall()                             //=Math.Ball(10)
```       

--------------------------------------

A lot of more **features** e.g. more Math-extensions and even a bunch of geometric forms are coming soon!   
Feel free to contact me ([robin@rofrischmann.de](mailto:robin@rofrischmann.de)) if you want to receive updates.