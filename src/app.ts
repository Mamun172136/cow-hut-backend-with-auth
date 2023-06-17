import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'

const app: Application = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use('/app/v1/users/', usersRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
