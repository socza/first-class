$(document).ready(function() {

	function Phone(brand, price, color, screen) {
		this.brand = brand;
		this.price = price;
		this.color = color;
		this.screen = screen;
	}

	Phone.prototype.printInfo = function() {
	
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
	}	

	Phone.prototype.sizeScreen = function() {
		
		$("p").append(this.brand + " have screen: " + this.screen + ".\<br\>"); 
	
	}

	var iPhone6S = new Phone("Apple", 1339, "silver", "'8");
	iPhone6S.printInfo();
	
	var SamsungGalaxyS6 = new Phone("Samsung", 1193, "white", "'9");
	SamsungGalaxyS6.printInfo();
	
	var OnePlus = new Phone("DigRepair", 300, "black", "'5.6");
	OnePlus.printInfo();

	var Sagem = new Phone("Sagem", 100, "pink", "'3.6");
	Sagem.printInfo();
	
	var arrayPhone = [iPhone6S, SamsungGalaxyS6, OnePlus, Sagem];
	var newHTML = [];

	for ( var i = 0;  i < arrayPhone.length; i++) {

			newHTML.push(arrayPhone[i].sizeScreen());
		
		}
	
});