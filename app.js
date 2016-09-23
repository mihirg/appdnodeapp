var http = require('http');


//require("appdynamics").profile({
// controllerHostName: 'localhost',
// controllerPort: 8080,
// accountName: 'customer1',
// accountAccessKey: 'SJ5b2m7d1$354',
// applicationName: 'CORE',
// tierName: 'CORE-NODEJS',
// nodeName: 'process' // The controller will automatically append the node name with a unique number
//});

//require("appdynamics").profile({
// controllerHostName: 'localhost',
// controllerPort: 8080,
// accountName: 'customer2',
// accountAccessKey: 'SJ5b2m7d1$354',
// applicationName: 'CORE',
// tierName: 'CORE-NODEJS',
// nodeName: 'process' // The controller will automatically append the node name with a unique number
//});

//require("appdynamics").profile({
// controllerHostName: 'localhost',
// controllerPort: 8080,
// accountName: 'customer1',
// accountAccessKey: 'SJ5b2m7d1$354',
// applicationName: 'TestAppForPavan',
// tierName: 'WebTier',
// nodeName: 'process' // The controller will automatically append the node name with a unique number
//});

require("appdynamics").profile({
 controllerHostName: 'localhost',
 controllerPort: 8080,
 accountName: 'customer1',
 accountAccessKey: 'SJ5b2m7d1$354',
 applicationName: 'MyNodeApp',
 tierName: 'NodeJS',
 nodeName: 'node2' // The controller will automatically append the node name with a unique number
});

function handleRequest(request, response) {
  var num = Math.random();
  if (num < 0.5) {
      throw new Error("Some Thing Went wrong");
  }
  response.end("It works " + num);
}

var server = http.createServer(handleRequest);

server.listen(56789, function() {
	console.log('Server is listening to port');
});


// not a recommended way.
process.on('uncaughtException', function (err) {
 console.log(err);
})
