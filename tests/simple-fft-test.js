var fft = require('../simple-fft.js').fft;

var bins = fft([0,2,0,-2,0,2,0,-2,0,2,0,-2,0,2]); // Length 14

console.log(bins);
