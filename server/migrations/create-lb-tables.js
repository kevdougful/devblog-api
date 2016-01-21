var server = require('../server');
var ds = server.dataSources.dev;
var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
ds.automigrate(lbTables, function(err) {
   if (err) throw err;
   console.log('Loopback tables [' + lbTables + '] created in ', ds.adapter.name);
   ds.disconnect();
});