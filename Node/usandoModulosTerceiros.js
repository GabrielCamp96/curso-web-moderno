// npm i -g nodemon para instalar nodemon global, para rodar automaticamente os scripts

const _ = require('lodash')
setInterval(() => console.log(_.random(1,100)), 2000)