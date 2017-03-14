var express = require('express')
var app = express()

var SerialPort = require('serialport');

app.get('/tvPower', function (req, res) {
  var port = new SerialPort('/dev/ttyACM0', {
    baudRate: 9600
  });

 port.on('open', function() {
    console.log('port opened')

    port.write('a', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message);
      }
      console.log('message written');
      port.close()
    });
  });

  // open errors will be emitted as an error event 
  port.on('error', function(err) {
    console.log('Error: ', err.message);
  })

  res.send({"test": "first"})
})

app.get('/soundPower', function (req, res) {
  var port = new SerialPort('/dev/ttyACM0', {
    baudRate: 9600
  });

 port.on('open', function() {
    console.log('port opened')

    port.write('b', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message);
      }
      console.log('message written');
      port.close()
    });
  });

  // open errors will be emitted as an error event 
  port.on('error', function(err) {
    console.log('Error: ', err.message);
  })

  res.send({"test": "first"})
})

app.get('/soundUp', function (req, res) {
  var port = new SerialPort('/dev/ttyACM0', {
    baudRate: 9600
  });

 port.on('open', function() {
    console.log('port opened')

    port.write('c', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message);
      }
      console.log('message written');
      port.close()
    });
  });

  // open errors will be emitted as an error event 
  port.on('error', function(err) {
    console.log('Error: ', err.message);
  })

  res.send({"test": "first"})
})

app.get('/soundDown', function (req, res) {
  var port = new SerialPort('/dev/ttyACM0', {
    baudRate: 9600
  });

 port.on('open', function() {
    console.log('port opened')

    port.write('d', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message);
      }
      console.log('message written');
      port.close()
    });
  });

  // open errors will be emitted as an error event 
  port.on('error', function(err) {
    console.log('Error: ', err.message);
  })

  res.send({"test": "first"})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})



  