

//------ Structure of javascript class ------------//

class Hello {

    constructor(name){

        this.name = name;
    }

    Greeting(){

        console.log(`\nHello ${this.name}\n`);
    }
}

let hello = new Hello("John Lee");

hello.Greeting();



//------ Moue class ------------//

class MyMouse{

    constructor(manufacturer, color){

        this.color = color;
        this.material = "pastic";
        this.Size = "middle";
        this.Weight = 200;
        this.price = 100;
        this.manufacturer = manufacturer;
        this.workingVoltage = 5;
    }

    showInfo(){

        console.log("Color is " + this.color);
        console.log("Materials is " + this.material);
        console.log("pricce is " + this.price);
    }

    button1Pressed(){

        console.log("You pressed button1")
    }

    button2Pressed(){

        console.log("You pressed button2")
    }
}

let myMouse = new MyMouse("Logitech" , "Red");

myMouse.showInfo();
myMouse.button1Pressed();
myMouse.button2Pressed();

console.log("\n");


class MLabMouse extends MyMouse{

  
    goToABloc(){

        console.log("Great, let's go to A Bloc!");
    }
}

let mLabMouse = new MLabMouse("Aalto university" , "Blue");

mLabMouse.showInfo();
mLabMouse.button1Pressed();
mLabMouse.button2Pressed();
mLabMouse.goToABloc();

console.log("\n");


