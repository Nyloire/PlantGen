gridgrp = document.getElementById("g")
linestart = false;
curline = null;

function Line(x1,y1,x2,y2)
{ 

    this.l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    this.l.setAttribute("x1", x1*40);
    this.l.setAttribute("y1", y1*40);
    this.l.setAttribute("x2", x2*40);
    this.l.setAttribute("y2", y2*40);
    this.l.setAttribute("stroke", "black");
    this.l.setAttribute("stroke-width", "10px");
    this.l.style.strokeLinecap = "round";
    this.l.style.pointerEvents = "none";

    gridgrp.appendChild(this.l);
}

function Dot(x,y)
{
    this.install = function()
    {
        this.c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.c.setAttribute("cx", x*40);
        this.c.setAttribute("cy", y*40);
        this.c.setAttribute("r", 5);
        this.c.setAttribute("fill", "gray");

        this.addMouseDown(this.c, this);
        gridgrp.appendChild(this.c);
    }


    this.addMouseDown = function(elem, obj)
    {
        elem.addEventListener("mousedown", function(){obj.mouseDown();}, false);
    }

    this.mouseDown = function()
    {
        if (linestart==false)
        {
            linestart=true;
            grid.points[x][y]++

            curline = new Line(x,y,x,y);

            console.log(grid.points)
        }
        else if (linestart===true)
        {
            linestart=false;
            grid.points[x][y]++

            curline.l.setAttribute("x2", x*40)
            curline.l.setAttribute("y2", y*40)

            console.log(grid.points)
        }

    }

    this.install();
}


function Grid()
{
    this.points = [];

    svg = document.getElementById("svg");
    
    gridgrp = document.createElementNS("http://www.w3.org/2000/svg", "g");
    gridgrp.style.transform = "translate("+(window.innerWidth/2-100)+"px, "+(window.innerHeight/2+100)+"px)"
    svg.appendChild(gridgrp);

    for (var _x = 0; _x <5; _x++) 
    {
        this.points.push([]);

        for (var _y = 0; _y <5; _y++)
        {
            
            this.points[this.points.length-1].push(0);

            new Dot(_x,_y)
        }
    };

    this.onresize = function()
    {
        this.gridgrp.style.transform = "translate("+(window.innerWidth/2-100)+"px, "+(window.innerHeight/2+100)+"px)"
    }
    
    
  
}
   grid = new Grid();
