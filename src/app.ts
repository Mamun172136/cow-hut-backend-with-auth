import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewres/globalErrorHandler'

const app: Application = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/', UserRoutes)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

//global error handler
app.use(globalErrorHandler)

export default app
