// Quiz 1

// 1. Write a **recursive** function which receives an array and returns the sum of the elements of the array.

var myArr = [2,4,5,6,8,10];

var arraySum = function(myArr) {
    if (myArr.length === 1) {
      return myArray[0];
    }
    else {
      return myArr.pop() + arraySum(myArr);
    }
};
      console.log(arraySum(myArr));

//-Expected Output ANSWER: 35

/*
 2.	Given two temperatures, return true if one is less than 0 and 
 the other is greater than 100.  
     a.	icyHot(120, -1) → true  
     b.	icyHot(-1, 120) → true  
     c.	icyHot(2, 120) → false  
*/

var temp1 = 0;
var temp2 = 0;

function icyHot(temp1, temp2){
    if ( ((temp1 < 0 ) || (temp1 > 100)) && ((temp2 < 0 ) || (temp2 > 100)) )
        return True;
    else 
        return false;
}
      icyHot(120, -1);

/*
 (a): icyHot(120, -1) - true
 (b): icyHot(-1, 120) - true  Answers
 (c): icyHot(2, 120) - false
*/

/*3.	Given 2 ints, a and b, return true if one if them is 10 or if  their sum is 10.  
    a.	makes10(9, 10) - true  
    b.	makes10(9, 9) - false  
    c.	makes10(1, 9) - true  
*/
var a = 0;
var b = 0;

function isTenOrEqualTen(a,b){
    if ( ((a === 10) || (b === 10)) || ((a + b) === 10) )
        return True;
    else 
        return false;
}
    isTenOrEqualTen(9, 10);

/*
 (a):  makes10(9, 10); ==> true
 (b):  makes10(1, 9); ==> true Answer
 (c):  makes10(9, 9); ==> flase
*/
/*
4.	Given a string, take the first 2 chars and return the string 
 with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.  
     a.	front22("kitten") → "kikittenki"  
     b.	front22("Ha") → "HaHaHa"  
     c.	front22("abc") → "ababcab"  
*/
var str = '';

function front22(str) {
  var strSlice = str.slice(0,2);
  if (str.length < 2) 
      return str+str+str;  
  else 
      return strSlice+str+strSlice;
}
  
front22('abc');
//expected output ----> "ababcab"

/*
 ANSWER (a): front22("kitten") → "kikittenki"
 ANSWER (b): front22("Ha") → "HaHaHa"
 ANSWER (c): front22("abc") → "ababcab"
*/

// 5. Solve this https://codility.com/programmers/lessons/3-time_complexity/frog_jmp/

/* 
A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.
Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

function solution(X, Y, D);

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:

  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:

after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
Assume that:

var x = 10;   
var y = 85;
var d = 30;
var hop = 0;
*/

function frogHop(x,y,d){
    if ((x > 1 && y > 1 && d > 1) && (x < 1000000000 && y < 1000000000 && d < 1000000000)){
        hop = 0;
    }
    if (x < y){
        var numberOfHops = ( (y-x) < d ); 
        numberOfHops = Math.floor(((y-x)/d)+1);
        return numberOfHops
    }
    else {
        return numberOfHops;
  }
}
         frogHop(10, 85, 30); ///Expected Output 3