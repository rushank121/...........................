class paper
{
	constructor(x, y)
	{
		var options = {
			isStatic:false,
			restitution:0.3,
			friction:0.3,
			density:1.2 };
		this.body = Bodies.rectangle(x,y,50,50,options);
		this.width = 50;
		this.height = 50;
		this.image = loadImage("paper.png");

		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push();
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER);
			image(this.image,0,0,this.width, this.height);
			pop();
			
	}

}