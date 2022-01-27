class Paper{
	constructor(x,y){
		var options = {
			isStatic : false,
			restitution : 0.3,
			friction : 10,
			density : 60
		}
		this.x=x;
		this.y=y;
		this.image=loadImage("paper.png");
		this.body = Bodies.circle(x,y,5,options);
		World.add(world, this.body);

	}

	display(){
		var pos =this.body.position;
		image(this.image,pos.x-50,pos.y-53,100,100);
		translate(pos.x, pos.y);
		fill("white");
		rect(0, 0,50,50);
		console.log(pos)
		if (pos.x > 1080){
			Matter.Body.translate(paperObject.body,paperObject.body.position,{x:1080,y:670});
		}
	
		
	}

}