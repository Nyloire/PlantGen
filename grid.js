gridgrp = document.getElementById("g")
linestart = false;

function Line(x1,y1,x2,y2)
{ 

    this.l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    this.l.setAttribute("cx", x*40);
    this.l.setAttribute("cy", y*40);
    this.l.setAttribute("r", 5);
    this.l.setAttribute("fill", "gray");

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

            console.log(grid.points)
        }
        else if (linestart===true)
        {
            linestart=false;
            grid.points[x][y]++

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
