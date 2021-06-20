# Searching and Sorting: Recursion Drills - Power Calculator

In this challenge you will solve several algorithmic problems using recursion. The objective is to practice using recursion to think about and solve problems. You do not have to worry about the efficiency of your solutions.

# Power Calculator

Given two integers a and b where b is not negative, then a raised to the power b is a multiplied by itself b times. We call a the base and b the exponent.

For example, 2 raised to the power 3 is 2 _ 2 _ 2 = 8. And 3 raised to the power 5 is 3 _ 3 _ 3 _ 3 _ 3 = 243.

Any number raised to the power 0 is 1.

Write a function called power() that takes two parameters, an integer as a base, and a non-negative integer as an exponent. The function returns the value of the base raised to the power of the exponent.

If the exponent is negative throw an Error with the message exponent should be >= 0.

- power(10,2) should return 100
- power(10,-2) throw Error exponent should be >= 0
