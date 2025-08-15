const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/contact',
  method: 'OPTIONS',
  headers: {
    'Origin': 'http://localhost:5174',
    'Access-Control-Request-Method': 'POST',
    'Access-Control-Request-Headers': 'content-type'
  }
};

const req = http.request(options, (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', JSON.stringify(res.headers, null, 2));
  
  res.on('data', (d) => {
    process.stdout.write(d);
  });});

req.on('error', (e) => {
  console.error('Error:', e);
});

req.end();
