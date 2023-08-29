const express = require('express');
const app = express();
const userRouter = require('./routes/user');
const taskRouter = require('./routes/tasks');

app.use('/api/user',userRouter);
app.use('/api/task',taskRouter);
app.use(express.json());



app.listen(8002,()=>{
    console.log("server listening to 8002");
});