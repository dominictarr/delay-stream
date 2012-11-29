# delay-stream

delay chunks through a stream.

## Example

delay chunks by 100 ms

``` js
var delay = require('delay-stream')

streamA.pipe(delay(100)).pipe(streamB)
```

that is all.

## License

MIT
