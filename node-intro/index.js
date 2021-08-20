//npm install superheroes
  /*
  var sh = require('superheroes');
  var s = sh.random();
  console.log(s);
  */

//npm install npm install number2text
  /*
  var numberToText = require('number2text');
  var textIndian = numberToText(1020340,'Indian'); 
  console.log('Converts 1020340 to ', textIndian);
  */

// QR code
const qr = require('qr-image');
const fs = require('fs');

// node qr "enter text to encode" "QRcode.png"

let dataText = process.argv[2] || null;
let outputImage = process.argv[3] || null;

if(dataText !== null && outputImage !== null) {
  qr.image(dataText, {
    type: 'png',
    size: 20
  }).pipe(fs.createWriteStream(outputImage));

  console.log(' QR Image Generated ')
} else {
  console.log(' error.... pl check');
}