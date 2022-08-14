const express = require('express')
require('./db/mongoose');
//const User = require('./models/user')
//const Task = require('./models/task')
const userRouter = require('./router/userRoute')
const taskRouter = require('./router/taskRoute')

const app = express()
const port = process.env.PORT


app.use(express.json());
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is up on port ' + port)
})

