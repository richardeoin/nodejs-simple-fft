**nodejs-simple-fft** is a [node.js](http://nodejs.org/) module that is a quick wrapper for [this](https://npmjs.org/package/fft) module. It's just a very basic thing I've put together for my own use, you're probably better off using the [original library](https://npmjs.org/package/fft).

## Installation ##

You can add this to your [node.js](http://nodejs.org/) [package.json](http://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json)

```json
	"dependencies": {
		"simple-fft": "git+ssh://git@github.com:richardeoin/nodejs-simple-fft.git",
	}
```

And if you have [npm](https://npmjs.org/) installed, just run `npm install`.

## Usage ##

```javascript
var fft = require('simple-fft');

var bins = fft([ 3, 1, 2, 3, 4, 3 ]);
```

That's it.

## LICENSE ###

MIT
