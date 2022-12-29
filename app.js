console.clear()
const colors =  require('colors')
const { createFile } = require("./helpers/multiplicar")
const argv = require('./config/yargs')



createFile(argv.b, argv.l, argv.h)
    .then (nameFIle => console.log(colors.rainbow(`Nombre ${nameFIle} `)))
    .catch( err => console.log(err))