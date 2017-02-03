var svg = document.getElementById("svg");
var bc = 0;
stems = [];

function update()
{
    window.requestAnimationFrame(update);
    
    for(var _ = 0; _ <= stems.length-1; _++)
    {
        if(stems[_]._<stems[_].len)
        {
            stems[_].update();
        }
    }
    
}
window.requestAnimationFrame(update);




function Stem(x,y,o,spacing,len,twist,shade,canbranch)
{
    this.g = document.createElementNS("http://www.w3.org/2000/svg", "g")
    svg.appendChild(this.g);

    this.dir = -90;
    this._ = 0;
    this.points = 200;
    this.len = len;
    this.clr = 0;
    
    this.update = function()
    {

        this._++;
        
        this.dir += Math.random() * twist - (twist / 2);
        x += ldx(spacing, this.dir);
        y += ldy(spacing, this.dir);
        if (o > 1) {
            o -= .02;
        }
        shade -= 1;
        this.clr -=1
    
        c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c.setAttribute("cx", x);
        c.setAttribute("cy", y);
        c.setAttribute("r", o);
        c.setAttribute("fill", "rgb(" + shade +"," + shade + "," + shade + ")");
    
        if (canbranch === true) {
            var r = Math.random()
    
            if (r < .1) {
                bc++
                if (bc < 8) {
                    stems.push(new Stem(x, y, o, spacing, len, twist, shade, true));
    
                }
            }
    
            this.g.appendChild(c);
        }
    }

    this.g.style.transform = "translate("+(window.innerWidth/2)+"px, "+(window.innerHeight/2)+"px)"
    this.onresize = function()
    {
        this.g.style.transform = "translate("+(window.innerWidth/2)+"px, "+(window.innerHeight/2)+"px)"
    }
}



stems.push(new Stem(-15,0,Math.random()*6+2,2,Math.random()*50+50,Math.random()*50,200,true));

