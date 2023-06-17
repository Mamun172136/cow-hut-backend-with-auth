import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { Server } from 'http'
async function main() {
  let server: Server
  try {
    await mongoose.connect(config.database as string)

    console.log('database is connected successfully')
    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(' connect holo na ', error)
  }
  process.on('unhandledRejection', err => {
    if (server) {
      server.close(() => {
        console.log('unhandled rejection: closing our server', err)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}
main()
