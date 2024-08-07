const express = require('express');
const app = express();
const port = 3000;

app.use(logger)

app.get('/', (req, res) => {
  res.send('Hello, World!');
  res.status(500).send("this is only for status")
  res.status(404).send("this is only for status")
  res.render('index')
  
});


const userRouter = require("./routes/users")

app.use("/users", userRouter)

function logger(req,res,next){
  console.log(req.method,req.url)
  next()

}
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


