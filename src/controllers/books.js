const Books = require('../models/books');

exports.findAll = (req, res) => {
    Books.find()
    .then(books => {
        res.send(books);
    }).catch(err => {
        res.status(404).send({
            message: err.message || "Something went wrong while fetching all books."
        });
    });
};

exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Please fill all required fields."
        });
    }
    const book = new Books({
        name : req.body.name,
        author: req.body.author
    });
    book.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(404).send({
            message: err.message || "Something went wrong while creating new record."
        });
    });
};

exports.findOne = (req, res) => {
    Books.findById(req.params.id)
    .then(book => {
        if(!book){
            return res.status(404).send({
                message: "Book not found with id "+req.params.id
            });
        };
        res.send(book);
    }).catch(err => {
         console.log(err.kind);
        return res.status(400).send({
            message: err.message || "Error getting book with id" + req.params.id
        });
    });
};

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Please fill all required fields."
        });
    };
    Books.findByIdAndUpdate(req.params.id, {
        name : req.body.name,
        author: req.body.author
    }, {new: true})
    .then(book => {
        if(!book){
            return res.status(404).send({
                message: "Book not found with id "+req.params.id
            });
        };
        res.send(book);
    }).catch(err => {
         console.log(err.kind);
        return res.status(400).send({
            message: err.message || "Error updating book with id" + req.params.id
        });
    });
};

exports.delete = (req, res) => {
    Books.findByIdAndRemove(req.params.id)
    .then(book => {
        if(!book){
            return res.status(404).send({
                message: "Book not found with id "+req.params.id
            });
        };
        res.send({message: "Book record deleted successfully"});
    }).catch(err => {
         console.log(err.kind);
        return res.status(400).send({
            message: err.message || "Error deleting book with id" + req.params.id
        });
    });
};