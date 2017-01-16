var svg = document.getElementById("svg");
var bc = 0;

function Plant(x,y,len,vert)
{
    this.element;
    this.points = [x,y];
    
    this.install = function()
    {
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        this.element.style.fill = "none";
        this.element.style.stroke = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
        
        svg.appendChild(this.element);
    }
    
    this.gen = function()
    {
    
        var dir = -90;
        var cx = x;
        var cy = y;
    
        for (var _ = 0; _ < 100; _++)
        {
            dir = ((Math.random() * vert) - (vert/2)) - 90;
            cx += ldx(len, dir);
            cy += ldy(len, dir);
            this.points.push(cx);
            this.points.push(cy);
            
            var r = Math.random()
            
            if (Math.round(r) == 1)
            {
                if (bc<5)
                {
                    new Plant(cx, cy, 2, 150);
                }
                bc++
            }
        }
    
        this.element.setAttribute("points", this.points.join(" "));
    }
    
    this.install();
    this.gen();

}

new Plant(520,800,5,200);
