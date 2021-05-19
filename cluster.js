const pm2 = require('pm2')
const numCpus = require('os').cpus().length

const instances = process.env.WEB_CONCURRENCY || numCpus
const maxMemory = process.env.WEB_MEMORY || 512
const eachInstances = Math.ceil(instances / 2)
console.log('Intances', instances)
console.log('MaxMemory', maxMemory)

const apps = [
  {
    script: 'server.js',
    name: 'Caixa Pizzaria Api',
    exec_mode: 'cluster',
    instances: eachInstances,
    max_memory_restart: `${maxMemory}M` // Auto restart if process taking more than XXmo
  }
]

pm2.connect(() => {
  pm2.start(apps, (err) => {
    if (err) return console.error('Erro ao inicializar a aplicação', err.stack || err)

    console.log('Api iniciada com sucesso!')

    pm2.launchBus((err, bus) => {
      if (err) console.log(err)

      console.log('[PM2] Log streaming started')

      bus.on('log:out', (packet) => {
        console.info('[App:%s] %s', packet.process.name, packet.data)
      })

      bus.on('log:err', (packet) => {
        console.error('[App:%s][Err] %s', packet.process.name, packet.data)
      })
    })
  })
})