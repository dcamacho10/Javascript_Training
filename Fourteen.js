/*
A Vector Type

Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/

class Vec{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    get length(){
        return "(" + Math.abs(0 - this.x) + ", " + Math.abs(0 - this.y) + ")";
    }

    plus(vector){
       let vectorResult = new Vec(this.x + vector.x, this.y + vector.y);
       return vectorResult;
    }

    minus(vector){
        let vectorResult = new Vec(this.x - vector.x, this.y - vector.y);
        return vectorResult;
     }
}