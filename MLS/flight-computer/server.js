const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('System active')
})


app.get('/telemitry', (req, res) => {
    const PTAdata = 'data from sensors'
    res.send(PTAdata)
  })

  app.get('/commection-speed', (req, res) => {
    var ping = require('ping');

    var hosts = [ 'google.com'];
    hosts.forEach(function(host){
        ping.sys.probe(host, function(isAlive){
            var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
            res.send(msg)
        });
    });
  
  })


app.listen(port, () => {
  console.log(`Flight system listening at: http://localhost:${port}`)
})