var svg = document.getElementById("svg");
var bc = 0;

function Plant(x,y,len,anglerange,verts,startdir,canbranch)
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
    
        var dir = startdir;
        var cx = x;
        var cy = y;
    
        for (var _ = 0; _ < verts; _++)
        {
            dir += -90;
            cx += ldx(len, dir);
            cy += ldy(len, dir);
            this.points.push(cx);
            this.points.push(cy);
            
            if (canbranch===true)
            {
                var r = Math.random()
                
                if (r < .2)
                {
                    bc++
                    if (bc<10)
                    {
                        new Plant(cx, cy, 10, 50, 20, dir, false);
                    }
                    
                }
            }

        }
    
        this.element.setAttribute("points", this.points.join(" "));
    }
    
    this.install();
    this.gen();
   

}

new Plant(520,800, 20,10,20, -90,true);
