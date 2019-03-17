const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const router = require('./router');

const server = express();
const port = 3000;

server.use(morgan('dev'));
server.use(bodyParser.json());

server.use(express.static(path.join(__dirname, '../client/dist'))); // front-end handler (anyone going to these urls will see our react components)

server.use('/api', router); // back-end handler (all requests sent to our server go through the router)

server.listen(port, () => console.log(`Connected to port ${port}`));
