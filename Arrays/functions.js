
//Function is used to reuse the code again and 
//again for multiple input.

//Function can de declared for single time and 
//called or invoked for multiple times

//It can parameterised or zero parameter function

//normal function
function add(a) 
{
    console.log(a);
}
add(1);

//Anonymous function

var x = function(b,c)
{
    console.log(b-c);
}
x(10,6);

//Arrow Functions

let y = (b,c) =>
{
    console.log(b-c);
}
y(10,6);