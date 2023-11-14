const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postModel = new Schema(
    {
        content: {
            type: String,
            required: true
        },
        likes: {
            type: Number,
            default: 0
        }
    },
    {   
        timestamps: {
            createdAt: 'created_at', 
            updatedAt: 'updated_at' 
        }
    }
);

module.exports = mongoose.model('postModel', postModel);