# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mtamkee/lotide`

**Require it:**

`const _ = require('@mtamkee/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: function will return the head of an array. ([1,2] returns [1])
* `tail`: function will return the tail of an array. ([1,2] returns [2])
* `middle`: function will return the middle of an array. ([1,2,3] returns [2])
* `countOnly`: function takes in an array and an object. The object key will have a value of true or false for if the value should be counted. (_.countOnly(["Matt", "Duncan"], {"Matt": true, "Duncan": false}) returns {"Matt": 1, "Duncan": undefined})
* `map`: function takes in an array and an arrow function which serves as a callback and will perform the arrow function on each item in the array. (map(["ground", "control"],x=>x[0]) returns ['g','c']). Thus this function is returning a list containing the first letter in each word.
* `eqArrays`: function will check if the two arrays are equal. (_.eqArrays([1,2,3], [1,2,3]) returns true)
* `findKeyByValue`: function takes in an object and a value. The function will iterate through the object and when the value is found, it will return its associated key. (_.findKeyByValue({'sci_fi': "The martian", 'comedy': "Family Guy"}, "Family Guy") returns "comedy")
* `eqObjects`: function will check if the two objects are equal to each other. (_.eqObjects({'Matt': 1}, {'Matt':1}) returns true) 
* `letterPositions`: function takes in a word as an arugument then it will return the indexes in which each letter is located. (_.letterPositions("Hello") returns { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] })
* `countLetters`: function takes in a word as an argument then will return the occurence of each letter. (.countLetter("Hello") returns { H: 1, e: 1, l: 2, o: 1 })
* `assertArraysEqual`: function will check if the two arrays are equal and will return an appropriate message. (./assertArraysEqual([1,2,3], [1,2,3]) returns "The two array's are equal)
* `assertObjectsEqual`: function will check if the two objects are equal to each other an will then return the appropriate messages. (_.eqObjects({'Matt': 1}, {'Matt':1}) returns "The two objects are equal") 
* `without`: function takes in two arrays as arguments. The first array contains the elements we have and the second array contains the elements we want to remove. The function will remove all occurences of items in array one that are found in array two. (_.without([1,2,3],[1]) returns [2,3])