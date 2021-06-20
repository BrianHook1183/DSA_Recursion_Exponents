/* 
Given two integers a and b where b is not negative, then a raised to the power b is a multiplied by itself b times. We call a the base and b the exponent.

For example, 2 raised to the power 3 is 2 * 2 * 2 = 8. And 3 raised to the power 5 is 3 * 3 * 3 * 3 * 3 = 243.

Any number raised to the power 0 is 1.

Write a function called power() that takes two parameters, an integer as a base, and a non-negative integer as an exponent. The function returns the value of the base raised to the power of the exponent.

If the exponent is negative throw an Error with the message exponent should be >= 0.

power(10,2) should return 100
power(10,-2) throw Error exponent should be >= 0
*/

/**
 * Return base raised to the power exponent.
 * @throws Error if exponent is negative
 * @param {integer} base an integer
 * @param {integer} exponent a non-negative integer
 */
function power(base, exponent) {
  if (exponent < 0) {
    throw new Error("exponent should be >= 0");
  }
  if (exponent == 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

/* 
ternary:

function power(base, exponent) {
  return exponent == 0? 1 : base * power(base, --exponent);
}
*/

/* 
iterative:

function power(base, exponent) {
  let result = 1;
  while(exponent--) {
    result *= base;
  }
  return result;
}

*/

module.exports = power;
