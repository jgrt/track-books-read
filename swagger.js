const swaggerJsDoc = require('swagger-jsdoc');

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

module.exports = swaggerDocs;


