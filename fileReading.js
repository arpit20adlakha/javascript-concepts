const fs = require('fs')
async function readIt() {
    let fileData ;
    let damit = await fs.readFile('./le_me.json', "utf8", (err, data) => {
        fileData = data;
        console.log(data);
    });

    return damit;
}
let data = readIt();

data.then()