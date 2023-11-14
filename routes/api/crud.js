const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const postModel = require('../../models/PostModel');

mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;

// connect to the database
mongoose.connect(process.env.MONGODB_URI);

// When successfully connected
mongoose.connection.on('connected', () => {
    console.log('Connection to database established successfully');
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
    console.error(`Error connecting to database: ${err}`);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log('Database disconnected');
});

/**
 * @method POST
 * @access public
 * @endpoint /api/v1/post
 **/
router.post('/post', async (req, res) => {
    const data = {
        content: req.body.content
    }
    const post = await postModel.create(data);
    res.json({
        message: post.toJSON()
    });
});

/**
 * @method GET
 * @access public
 * @endpoint /api/v1/get
 **/
router.get('/get', async (req, res) => {
    const query = postModel.find();
    res.json({
        data: await query.exec()
    });
});

/**
 * @method PUT
 * @access public
 * @endpoint /api/v1/put/32323
 **/
router.put('/put/:id', (req, res) => {
    res.json({
        message: `PUT ${req.params.id} API for MERN Boilerplate`,
    });
});

/**
 * @method DELETE
 * @access public
 * @endpoint /api/v1/delete/424
 **/
router.delete('/delete/:id', (req, res) => {
    res.json({
        message: `DELETE ${req.params.id} API for MERN Boilerplate`,
    });
});

module.exports = router;
