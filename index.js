var through = require('through')

module.exports = function (delay) {

  var queue = []

  var ts = through(function(data) {

    queue.push(data)

    setTimeout(function () {
      ts.queue(queue.shift())
    }, delay)

  })

  return ts
}
