"use strict";

//Up & Going
  function oneOne() {

    const TAX_RATE = 0.08;
    const PHONE_PRICE = 99.99;
    const ACCESSORY_PRICE = 14.99;
    const SPENDING_THRESHOLD = 400;
    let balance = prompt("How much money do you have?");
    let total = 0;

    function tax( amount ) {
      return amount * TAX_RATE;
    }

    function priceFormat( amount ) {
      return "$" + amount.toFixed( 2 );
    }

    while (total < balance) {
       total = total + PHONE_PRICE;

        if (total < SPENDING_THRESHOLD) {
	          total = total + ACCESSORY_PRICE;
        }
    }

    total = total + tax( total );

    console.log (
      "Your total is " + priceFormat( total )
    );

    if (total > balance) {
      console.log(
        "You can't afford this!"
      );
    }
  }

//Scope and Closures
function twoOne() {

}
