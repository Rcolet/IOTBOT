const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
var port = new SerialPort('/dev/cu.usbmodem14201', {
    baudRate: 9600,
});

const parser = port.pipe(new Readline({delimiter: '\n'}));

// Read the port data
port.on("open", function () {
    console.log('open');
});

parser.on('data', data =>{
    console.log(data);
});