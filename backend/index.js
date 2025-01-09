import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import routes from "./routes/UserRoute.js"

const app = express()
const port = 5000

mongoose.connect('mongodb://127.0.0.1:27017/fullstack_db')
    .then(() => console.log('Database connected...'))
    .catch(e => console.log(`Error : ${e}`))

app.use(cors())
app.use(express.json())


app.use(routes)



app.listen(port, () => console.log(`Server up and running at ${port}`));
