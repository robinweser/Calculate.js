 var Fraction = function (numerator, denominator) {
     this.numerator = numerator;
     this.denominator = denominator;

     //Returns the numerator
     this.getNumerator = function () {
         return this.numerator;
     }

     //Sets the numerator
     this.setNumerator = function (numerator) {
         this.numerator = numerator;
     }

     //Returns the denominator
     this.getDenominator = function () {
         return this.denominator;
     }

     //Sets the denominator
     this.setDenominator = function (denominator) {
         this.denominator = denominator;
     }

     //Returns the fraction
     this.getFraction = function () {
         return this;
     }

     //Sets the (new) fraction
     this.setFraction = function (numerator, denominator) {
         this.numerator = numerator;
         this.denominator = denominator;
     }

     //Returns the greatest common factor
     this.getGreatestCommonFactor = function () {
         return gcf(this.numerator, this.denominator);
     }

     //Returns the canceled numerator
     this.getCanceledNumerator = function () {
         return this.numerator / this.getGreatestCommonFactor();
     }

     //Returns the canceled denominator
     this.getCanceledDenominator = function () {
         return this.denominator / this.getGreatestCommonFactor();
     }

     //Returns the canceled fraction
     this.getCanceledFraction = function () {
         var gcf = this.getGreatestCommonFactor();
         return new Fraction(this.numerator / gcf, this.denominator / gcf);
     }

     //Cancels the fraction
     this.cancel = function () {
         var gcf = this.getGreatestCommonFactor();
         this.numerator /= gcf;
         this.denominator /= gcf;
     }

     //Returns the reciprocal
     this.getReciprocal = function () {
         return new Fraction(this.denominator, this.numerator);
     }

     //Returns the least common multiple
     this.getLeastCommonMultiple = function (fraction) {
         var lcm = (this.denominator > fraction.denominator ? this.denominator : fraction.denominator);
         while (lcm % this.denominator != 0 || lcm % fraction.denominator != 0)++lcm;
         return lcm;
     }

     //Corrects the fraction to a standard form (always negative numerator not denominator)
     this.correctAlgebraicSign = function () {
         if (this.denominator < 0) {
             this.numerator *= -1;
             this.denominator *= -1;
         }
     }

     //Calcultes the fraction float value
     this.calculate = function () {
         return this.numerator / this.denominator;
     }

     //Converts the fraction to a string with a given delimiter
     this.toString = function (delimiter) {
         return this.numerator + (delimiter ? delimiter : "/") + this.denominator;
     }

     //Divides by a fraction or value
     this.divide = function (fraction) {
         if (fraction instanceof Fraction) {
             this.numerator *= fraction.denominator;
             this.denominator *= fraction.numerator;
         } else {
             var frac = Calculate.toFraction(fraction);
             if (frac) {
                 this.divide(frac);
             }
         }
     }

     //Multiplicates with a fraction or value
     this.multiplicate = function (fraction) {
         if (fraction instanceof Fraction) {
             this.numerator *= fraction.numerator;
             this.denominator *= fraction.denominator;
         } else {
             var frac = Calculate.toFraction(fraction);
             if (frac) {
                 this.multiplicate(frac);
             }
         }
     }

     //Adds a fraction or value
     this.add = function (fraction) {
         if (fraction instanceof Fraction) {
             var lcm = this.getLeastCommonMultiple(fraction);
             this.numerator = this.numerator * (lcm / this.denominator) + fraction.numerator * (lcm / fraction.denominator);
             this.denominator = lcm;
         } else {
             var frac = Calculate.toFraction(fraction);
             if (frac) {
                 this.add(frac);
             }
         }
     }

     //Substracts a fraction or value
     this.substract = function (fraction) {
         if (fraction instanceof Fraction) {
             var lcm = this.getLeastCommonMultiple(fraction);
             this.numerator = this.numerator * (lcm / this.denominator) - fraction.numerator * (lcm / fraction.denominator);
             this.denominator = lcm;
         } else {
             var frac = Calculate.toFraction(fraction);
             if (frac) {
                 this.substract(frac);
             }
         }

     }
 }