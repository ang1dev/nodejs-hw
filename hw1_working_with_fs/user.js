const fs = require('fs');


function create(path, data) {
    fs.writeFileSync(path, JSON.stringify(data));
}

function append(path, data) {
    fs.appendFileSync(path, JSON.stringify(data))
}

function registerDate(path,userArray) {
    for (let i = 0; i < userArray.length; i++) {
        if (userArray[i].dateCreated == "13.02.23") {
            userArray[i].isActive = false            
        }
    }
    fs.writeFileSync(path, JSON.stringify(userArray));
}

function deleteUser(path,username) {
    let data = fs.readFileSync("users.json", { encoding: "utf-8" });
    let parsedData = JSON.parse(data)

    for (let i = 0; i < parsedData.length; i++) {
        if (parsedData[i].username == username) {
            const index = parsedData.indexOf(parsedData[i]);
            if (index > -1) { 
                parsedData.splice(index, 1); 
            }
        }
    }
    fs.writeFileSync(path, JSON.stringify(parsedData));
}

function inActive(path) {
    let data = fs.readFileSync(path, { encoding: "utf-8" });
    let parsedData = JSON.parse(data);

    for (let i = 0; i < parsedData.length; i++) {
        if (!parsedData[i].isActive) {
            const index = parsedData.indexOf(parsedData[i]);
            if (index > -1) {
                parsedData.splice(index, 1);
            }
        }
    }

    fs.writeFileSync(path, JSON.stringify(parsedData));
}

module.exports = { create, append, registerDate, deleteUser, inActive };