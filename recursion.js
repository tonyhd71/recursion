//not recursive way below
/*
for (let i =0; i < nums.length; i++) {
	if (nums[i] % 2 == 0) {
		//alert(nums[i] + " is not odd");
		console.log(nums[i] + " is not odd");
	} else if (nums[i] % 2 != 0) {
		alert(nums[i] + " is odd");
	}
}


//isItOdd(x--);
/*
objectives: define what recursion is: A process (function in our case) that calls itself
understand 2 essential components oif recursive function
visuALIZE the call stack
lets talk about the call stack 
    - in almost all programa languages, there is a built in data structure that manages what happens when functions are invoked

-THE CALL STACK
    -it is a stack data structure, we wil talk about it later
    - any time a function is invoked it is placed (pushed) on the top of the call stack
    - when javascript sees the return keyword or when the function ends, the compiler will remove (pop) the top item from the stack
    - as functions are invoked they are added to the top of the stack and then popped off one at a  time from the top
    - when we write recursive functions, we keep pushing new functions onto the calls stack
    - BASE CASE is the condition when the recursion ends (this is the most important concept to understand)
    - TWO essential parts of a recursive function! Base case and different input (you will call the same function over and over but each time you want to call it with a different piece of data)

function takeShower() {
	return "Showering";
}
function eatBreakfast() {
	let meal = cookFood();
	return 'Eating ${meal}';
}
function cookFood() {
	let items = ["OAtmeal", "Eggs", "Protein shake"];
	return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
	takeShower();
	eatBreakfast();
	console.log("Ok ready to go ti work");
}
wakeUp();

//RECURSIVE EXAMPLE BELOW
function countDown(num) {
	if (num <= 0) {
		console.log("All done!");
		return;
	}
	console.log(num);
	num--;
	countDown(num);
}
countDown(8);

//same without recursion
function countBackwards(x) {
	for (let i = x; i > 0; i--) {
		console.log(i);
	}
	console.log("All done!");
}
countBackwards(5);



SECOND RECURSIVE FUNCTION BELOW
function sumRange(num) {
	if (num === 1) return 1;
	return num + sumRange(num-1);
	//return 3 + sumRange(2) -> return 3 + 2 + sumRange(1) -> return 3+ 2 +1)
}
console.log(sumRange(3));



FACTORIAL USING ITERATION

function findFactorialAgain(x) {
	let total = 1;
	for (let i = x; i > 0; i--) {
		total = total * i;
	}
	return total;
	//return total;
}
console.log("should be 120 " + findFactorialAgain(5));

FACTORIAL EXAMPLE BELOW


function findFactorial(num) {
	if (num ===1) return 1;
		return num * findFactorial(num-1);
	
}
console.log(findFactorial(5));

COMMON RECURSION PITFALLS
    -no base case, or wrong base case
    - forgetting to return or returning the wrong thing!
*/