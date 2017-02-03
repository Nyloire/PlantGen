
function Grid()
{

    this.points = [];

    svg = document.getElementById("svg");
    
    this.g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    this.g.style.transform = "translate("+(window.innerWidth/2-100)+"px, "+(window.innerHeight/2+100)+"px)"
    svg.appendChild(this.g);

    for (var _x = 0; _x <5; _x++) 
    {
        for (var _y = 0; _y <5; _y++)
        {
            this.point = Math.round(Math.random())
            c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            c.setAttribute("cx", _x*40);
            c.setAttribute("cy", _y*40);
            c.setAttribute("r", 5);
            c.setAttribute("fill", "gray");

            this.g.appendChild(c);
        }
    };

    this.onresize = function()
    {
        this.g.style.transform = "translate("+(window.innerWidth/2-100)+"px, "+(window.innerHeight/2+100)+"px)"
    }
    
    
  
}
   grid = new Grid();

   /* Grid((window.innerWidth / 2) - 50,(window.innerHeight / 2) + 100,5)
    Grid((window.innerWidth / 2) - 15,(window.innerHeight / 2) + 100,5)
    Grid((window.innerWidth / 2) + 20,(window.innerHeight / 2) + 100,5)
    Grid((window.innerWidth / 2) + 55,(window.innerHeight / 2) + 100,5)
    
    Grid((window.innerWidth / 2) - 90,(window.innerHeight / 2) + 140,5)
    Grid((window.innerWidth / 2) - 50,(window.innerHeight / 2) + 140,5)
    Grid((window.innerWidth / 2) - 15,(window.innerHeight / 2) + 140,5)
    Grid((window.innerWidth / 2) + 20,(window.innerHeight / 2) + 140,5)
    Grid((window.innerWidth / 2) + 55,(window.innerHeight / 2) + 140,5)
    
    Grid((window.innerWidth / 2) - 90,(window.innerHeight / 2) + 180,5)
    Grid((window.innerWidth / 2) - 50,(window.innerHeight / 2) + 180,5)
    Grid((window.innerWidth / 2) - 15,(window.innerHeight / 2) + 180,5)
    Grid((window.innerWidth / 2) + 20,(window.innerHeight / 2) + 180,5)
    Grid((window.innerWidth / 2) + 55,(window.innerHeight / 2) + 180,5)
    
    Grid((window.innerWidth / 2) - 90,(window.innerHeight / 2) + 220,5)
    Grid((window.innerWidth / 2) - 50,(window.innerHeight / 2) + 220,5)
    Grid((window.innerWidth / 2) - 15,(window.innerHeight / 2) + 220,5)
    Grid((window.innerWidth / 2) + 20,(window.innerHeight / 2) + 220,5)
    Grid((window.innerWidth / 2) + 55,(window.innerHeight / 2) + 220,5)
    
    Grid((window.innerWidth / 2) - 90,(window.innerHeight / 2) + 260,5)
    Grid((window.innerWidth / 2) - 50,(window.innerHeight / 2) + 260,5)
    Grid((window.innerWidth / 2) - 15,(window.innerHeight / 2) + 260,5)
    Grid((window.innerWidth / 2) + 20,(window.innerHeight / 2) + 260,5)
    Grid((window.innerWidth / 2) + 55,(window.innerHeight / 2) + 260,5)

    console.log(Math.seedrandom(pointid))*/