
class rectangle 
{
    constructor(width, height, color)
    {
        this.width = width;
        this.height = height;
        this.color = color;
        console.log(" \nInside constructor. Class members initialised.\n");
        console.log("Width = ", this.width);
        console.log("Height = ", this.height);
        console.log("Color = ", this.color);
    }

    calcArea()
    {
        return ((this.width) *(this.height));
    }
}

const rect1 = new rectangle(12,12,"yellow");
console.log ("Total area of this rectangle is = ", rect1.calcArea());