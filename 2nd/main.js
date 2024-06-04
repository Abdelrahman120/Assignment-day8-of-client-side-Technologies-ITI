import {square,reqtangle,circle} from "./classes.js";

var s=new square(4);
console.log(s.calcArea());
console.log(s.calcPerimeter());

var r=new reqtangle(2,3);
console.log(r.calcArea());
console.log(r.calcPerimeter());

var C=new circle(3);
console.log(C.calcArea(3));
console.log(C.calcPerimeter(3));

