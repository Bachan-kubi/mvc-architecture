const express = require('express');
const app = express();
const cors = require("cors");
const userRouter = require('./routes/users.route');
const port = process.env.PORT || 5000;


// to use data from form
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(userRouter);


app.use('*', (req, res, next)=>{
    res.status(404).json({
        "message": 'Resources not found!'
    })
})

app.listen(port, ()=>{
    console.log(`mvc is running on ${port}`)
});