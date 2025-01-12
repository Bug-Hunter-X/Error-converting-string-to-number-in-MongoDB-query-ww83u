# MongoDB Query Error: Converting String to Number

This repository demonstrates a common error in MongoDB queries involving the conversion of string values to numbers. When performing numerical comparisons on fields that may contain strings, it is crucial to handle potential type conversion errors effectively.

The `bug.js` file contains a query that attempts to convert a string price to a double using `$toDouble`.  This will throw an error if the price field is not a valid number.

The `bugSolution.js` file provides a robust solution to handle these scenarios.