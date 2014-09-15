# calculateMe.js #
----------------------------------- 
    
**calculateMe.js** is kind of an **extension** to the JavaScript build-in **Math-Library**.   
Right now there's a **powerful term-parser** that supports all popular math functions like *sin, cos, tan, log, sqrt or pow*.   

## **How to use**
-----------------------------------

Just download **[calculateMe.js](https://bitbucket.org/Grindelwald/calculateme.js/downloads/calculateMe%5Bversion0.0.1-15.09.14%5D.zip)** and import it within your project.    
```
#!html
<script type="text/javascript" src="calculateMe.js"></script>

```    
    
    
Now you can use the parser using **Math.calculate(therm, mode)**.   
You can set mode to **"DEG"**, **"RAD"** or **"GRA"** while default's set to **"DEG"**.
```
#!javascript 
Math.calculate("sin(23) + 3")                //=3,39073~
Math.calculate("sin(23) + 3", "RAD")         //=2,15377~
Math.calculate("2+3*sqrt(12-sin(45)) + 5")   //=17,08147~

```  
        
A lot of more **features** e.g. more Math-extensions and even a bunch of gemoetric forms are coming soon!   
Feel free to contact me ([robin@rofrischmann.de](mailto:robin@rofrischmann.de)) if you want to recieve updates.