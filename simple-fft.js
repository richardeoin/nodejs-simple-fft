/* Richard Meadows 2013 */

/* -------- Includes -------- */

var fft_lib = require('fft');

/* -------- Helper Functions -------- */

function round_to_6dp(val) {
	return Math.round(val*1000000)/1000000;
}

/* -------- Public Functions -------- */

/**
 * Puts the values in an array of data through a fast fourier transform, using the values in the array
 * as the real values and taking the imaginary component of the input to be zero. The array must contain
 * 2^n elements where n is an integer greater than zero. The output will be an array of objects
 * describing each for the 2^(n-1) datapoints output from the fast fourier transform.
 */
exports = module.exports = function (data_array) {
	var data_len = data_array.length;

	/* Check we have a suitable number of data_len */
	if (data_len < 1) { throw new Error("Array to fast fourier transform must have 1 or more datapoints."); }

	/* Prepare an output buffer for the fft */
	var fft_output = new Array(data_len);

	/* Do the FFT */
	var fft = new fft_lib.complex(data_len, false);
	fft.simple(fft_output, data_array, 'real');

	/* Process the fft output */
	for (i = 0; i < (data_len/2)+1; i++) { /* We only get back half the number of bins as we do samples */
		var real = fft_output[(i*2)+0]; /* Even indexes are the real values */
		var imag = fft_output[(i*2)+1]; /* Odd indexes are the imaginary values */
		fft_output[i] = round_to_6dp(Math.sqrt((real*real)+(imag*imag)));
	}

	/* Return the output of the FFT, only returning as many bins as we have */
	return fft_output.slice(0, (data_len/2)+1);
}
