import express from 'express'
import { AppDataSource } from './data-source'
import routes from './routes'
import cors from 'cors';

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())
    app.use(cors())

    app.use(routes)

    const port = process.env.PORT || 3000
    return app.listen(port, () =>{
        console.log("Servidor rodando na url: http://localhost:" + port)
    })
})