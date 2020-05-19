const express = require('express')
const app = express()

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const bookRouter = require("./routes/books");
app.use("/library", bookRouter);

const swaggerDefinition = {
    info: {
            title: 'Books API',
            description: "Book api doc"
    }
};
const options = {
  swaggerDefinition,
  apis: ['./routes/books.js'],
};

const swaggerDocs = swaggerJsDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));




const port = 3000;
const host = '0.0.0.0';

app.listen(port, host , () => {
 console.log(`server listening on port ${port}`);
})