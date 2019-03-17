const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 23 * * 6', () => {
    console.log('Executando tarefa 1 !', new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1 !', new Date().getSeconds())
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,6)]
regra.hour = 23
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra , () => {
    console.log('Executando tarefa 2 !', new Date().getSeconds())
})

// setImmediate: Padrão JS
// setInterval:  Padrão JS