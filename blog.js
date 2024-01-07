const fs = require ("fs");

fs.writeFile("login.txt", "Login", (err) => {
    if (err) throw err;
    console.log("The file has been saved :)");
});