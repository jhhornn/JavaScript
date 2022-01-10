const fs = require('fs');

//Blocking, Synchronous way
const textIn = fs.readFileSync('./Bootcamp/txt/input.txt', 'utf-8'); //. startes from root directory which is the directory you
//ran your npm instal(to install modules)
console.log(textIn)

const textOut = `This is what we know about the inputted text: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./Bootcamp/txt/output.txt', textOut);
console.log('File written!');

//Non blocking Asynchronous way

fs.readFile('./Bootcamp/txt/start.txt', 'utf-8', (err, data1) => {

    if (err) return console.log('ERROR!');

    fs.readFile(`./Bootcamp/txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile(`./Bootcamp/txt/appendix.txt`, 'utf-8', (err, data3) => {
            console.log(data3);

            fs.writeFile('./Bootcamp/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log('Your file has been written')
            })
        })
    })
}); //The presence of callback function here
console.log('will read file');