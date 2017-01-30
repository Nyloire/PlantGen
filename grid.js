function Grid(x,y,o)
{

    svg = document.getElementById("svg")
    this.point = Math.round(Math.random())

    c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", o);
    c.setAttribute("fill", "gray");
	
	console.log(this.point);

    svg.appendChild(c);
  
}
    Grid((window.innerWidth / 2) - 90,(window.innerHeight / 2) + 100,5)
    Grid((window.innerWidth / 2) - 50,(window.innerHeight / 2) + 100,5)
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