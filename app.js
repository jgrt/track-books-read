const express = require('express')
const app = express()
const bookRouter = require("./routes/books");
app.use("/books", bookRouter);

app.listen(3000, "0.0.0.0" , () => {
 console.log("server started");
})