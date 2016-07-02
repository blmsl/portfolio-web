'use strict'
let forever = require('forever-monitor')
let ord = require('ord')
let child = new (forever.Monitor)('server/server.js')

child.on('watch:restart', (info) => console.error(`Restarting script because ${info.file} changed`))

child.on('restart', () => console.error(`Forever restarting script for the ${child.times}${ord(child.times)} time`))

child.on('exit:code', (code) => console.error(`Forever detected script exited with code ${code}`))

child.start()
