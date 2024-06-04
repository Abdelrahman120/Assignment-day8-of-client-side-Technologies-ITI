class Shape{
    constructor(l){
        this.length=l;
    }
    calcArea(){}
    calcPerimeter(){}
}
export class square extends Shape{
    constructor(l){
        super(l);
    }
    calcArea(){
        return this.length*this.length
    }
    calcPerimeter(){
        return 4*this.length
    }
}
export class reqtangle extends Shape{
    constructor(l,w){
        super(l);
        this.width=w;
    }
    calcArea(){
        return this.length*this.width;
    }
    calcPerimeter(){
        return 2*(this.length+this.width)
    }
}
export class circle extends Shape{
    constructor(l){
        super(l);
    }
    calcArea(){
        return Math.PI * this.length**2;
    }
    calcPerimeter(){
        return 2 * Math.PI * this.length;
    }
}