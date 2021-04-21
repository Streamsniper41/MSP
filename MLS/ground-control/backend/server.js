const http = require('http');


for (i = 0; i < 1000; i++) {
http.get('http://localhost:3000/commection-speed', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log(data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
}
