function Punto (x,y) {
	this.x = x;
	this.y = y;

	this.getDistance = function (p2) {
		return (Math.sqrt(
			Math.pow(this.x-p2.x,2) + Math.pow(this.y-p2.y,2)
			)
		)
	}
}


function Triangolo (a,b,c) {
	
	//vertici del triangolo
	this.v1 = a;
	this.v2 = b;
	this.v3 = c;

	//Metodo per calcolare un lato del triangolo passando due punti
	this.getlato = function (a,b) {

		return a.getDistance(b);
	}


	//Metodo per il perimetro del triangolo
	this.getPerimeter = function () {
		return (this.getlato(this.v1,this.v2)+this.getlato(this.v1,this.v3)+this.getlato(this.v2,this.v3));


	}

	//Metodo per l'area del triangolo
	this.getArea = function () {
		
		//Erone
		var l1=this.getlato(this.v1,this.v2);
		var l2=this.getlato(this.v1,this.v3);
		var l3=this.getlato(this.v2,this.v3);

		return (Math.sqrt(
							((l1+l2+l3)*(l2+l3-l1)*(l1+l3-l2)*(l1+l2-l3))) / 4 )
				
	}

}



//Test

var a = new Punto (0,4);
var b = new Punto (4,0);
var c = new Punto (0,0);

var t = new Triangolo(a,b,c);

t.getPerimeter();
t.getArea();