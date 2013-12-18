var americano = require('americano');

var port = process.env.PORT || 9251;
console.log("port is ",port);

americano.start({name: 'mes-infos-géographiques', port: port});
