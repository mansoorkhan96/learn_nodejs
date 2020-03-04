// const log = require('./logger');

// log('My Message');

// const path = require('path');

// let pathObj = path.parse(__filename);

// console.log(pathObj);


// const os = require('os');

// let freeMemory = os.freemem();
// let arch = os.arch();


// console.log(arch);
// console.log(freeMemory);

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('messageLogged', function() {
//     console.log('New Message has been logged');
// });

// emitter.emit('messageLogged');


const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('Hello there..');