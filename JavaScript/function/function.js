

//------- function(named) --------------

function hello_named(name){

    console.log(`\nHello ${name}!\n`);
}

hello_named("John");


//------- function(anonymous) --------------

let hello_anonymous = function(name){

    console.log(`\nHello ${name}!\n`);
}

hello_anonymous("John");


//------- function(arrow) --------------

let hello_arrow = (name) =>{

    console.log(`\nHello ${name}!\n`);
}

hello_arrow("John");


//------- function(array) --------------


let functions = [hello_anonymous , hello_arrow];

functions[0]("John");
functions[1]("Media lab");

functions.forEach(func => {
    func("call the functions in array");
});








