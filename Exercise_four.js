/*
Minimum

Chapter 2 introduced the standard function Math.min, which returns its smallest argument (see “Return Values” on page 27). We can build something like that now. Write a function min that takes two arguments and returns their minimum.

*/

function min(arg1, arg2)
{
    return arg1>arg2?arg2:arg1;
}