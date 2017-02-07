/*
const calc = require('./calc')

const numbersToAdd = [  
  3,
  4,
  10,
  2
]

const result = calc.sum(numbersToAdd)  
console.log(`The result is: ${result}`)
*/

/*
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(new Date() + '\n');
}).listen(port);

console.log('Server running on localhost at port %s', port);
*/
/*
var fs = require('fs');// file system
fs.readFile('./app/foo.txt','utf-8', function(err, data) {
  if (err) {
    return console.log(err)
  }

  console.log(data)
});

*/
/*
const fs = require('fs')

console.log('start reading a file...')

fs.readFile('./app/foo.txt', 'utf-8', function (err, content) {  
  if (err) {
    console.log('error happened during reading the file')
    return console.log(err)
  }

  console.log(content)
})

console.log('end of the file')  
*/

/*
let fs = require('fs');
function stats (file) {  
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, data) => {
      if (err) {
        return reject (err)
      }
      resolve(data)
    })
  })
}

Promise.all([  
  stats('./app/foo.txt'),
  stats('./app/foo.txt'),
  stats('./app/foo.txt')
])
.then((data) => console.log(data))
.catch((err) => console.log(err))

*/
/*
var http = require('http');

http.request({ hostname: 'mobileandwebstudio.com' }, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log(chunk);
  });
}).end();
*/

/*--------------Http Server---------------------*/
/*
const http = require('http')  
const port = 3000

const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
*/

/*------------Using Express Framework----------*/
/*
Express by default gives you a router. You don't have to check manually for the URL 
to decide what to do, but instead, you define the application's routing with app.get, 
app.post, app.put, etc. They are translated to the corresponding HTTP verbs.

One of the most powerful concepts that Express implements is the middleware pattern.
*/
/*
const express = require('express')  
const app = express()  
const port = 3000

app.get('/', (request, response) => {  
  response.send('Hello from Express!')
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

*/

/*-------Express middleware------*/

/*
const express = require('express')  
const app = express()
// define middleware - using app.use
app.use((request, response, next) => {  
  console.log(request.headers)
  next()
})
// define middleware - using app.use
app.use((request, response, next) => { 
// Your middlewares can append extra data to the request object 
// that downstream middlewares can read/alter. 
  request.chance = Math.random()
  next()
})

app.get('/', (request, response) => {  
  response.json({
    chance: request.chance
  })
})

app.listen(3000) 

*/ 

/*------------Express Error handling--------------------*/
/* NB: The error handler function should be the last function added with app.use.
The error handler has a next callback - it can be used to chain multiple error handlers.
*/
/*
const express = require('express')  
const app = express()

app.get('/', (request, response) => {  
  throw new Error('oops')
})

app.use((err, request, response, next) => {  
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})

app.listen(3000) 
*/
/*------------Express Using Handlebars for HTML views------*/
const path = require('path')  
const express = require('express')  
// https://www.npmjs.com/package/express-handlebars
const exphbs = require('express-handlebars')

const app = express()

app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

// route handler to our Express application:
app.get('/', (request, response) => {  
  response.render('home', {
    name: 'John'
  })
})
app.get('/products', (request, response) => {  
  response.render('products', {
    products: ['Apple Pie', 'Pizza', 'Humbergur']
  })
})
app.listen(3000)