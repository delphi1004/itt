

function loadImage(){

    console.log("\nLoading images...");
}

function loadUserInfo(){

    console.log("\nLoading user informations...");

    setTimeout(() => {
        
        console.log("\nUser information loaded!");
    }, 2000);
}

function connectDB(){

    console.log("\nConnecting to DB...");
}

loadImage();
loadUserInfo();
connectDB();
