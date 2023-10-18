class point
{
    constructor (x,y)
    {
        this.x = x;
        this.y = y;
    }

    static distance(o1, o2)
    {
        let dx = o2.x - o1.x;
        let dy = o2.y - o1.y;

        return Math.sqrt(dx*dx +dy*dy);
    }
}
var p1 = new point(5,5);
var p2 = new point(9,8);
console.log(point.distance(p1, p2));