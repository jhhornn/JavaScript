// why var keyword is a bad practice and how to solve it
/* using var in a for loop makes it usable outside the 
the scope which isn't a good practice
This uis known as hoisting */

for (var i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("value outside the loop " + i)

//The value of i is not suppose to be accessible from
//outside the loop asshown in the above code