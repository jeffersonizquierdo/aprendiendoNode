const fs = require('fs');
const colors =  require('colors')

const createFile = (num = 5, list, hasta) => {

    return new Promise((resolve, reject) => {

        let salida = '';
        let consola = '';
        for( let n = 0; n <= hasta; n++ ) {
    
            consola +=  `${colors.yellow(num)} ${colors.green('x')} ${colors.blue(n)} ${colors.red('=')} ${colors.dim(num * n)}\n`;
            salida += `${num} x ${n} = ${num * n}\n`;
        }

        if(list) console.log(consola);

        let nameFile = `Tabla del ${num} creada`;

        fs.writeFileSync(`./salida/TablaDel${ num }.txt`, salida)
        
        resolve( nameFile )
        reject( `No se pudo crear el archivo` )
    })
}

module.exports = {
    createFile
}