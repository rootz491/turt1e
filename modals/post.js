const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@todo.37zp7.mongodb.net/React-app-0?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const PostSchema = new mongoose.Schema({
    name: String,
    caption: String,
    url: String,
    cloudinary_id: String
});

//  collection
const PostModel = mongoose.model('Post', PostSchema);



module.exports = {
    getPosts: async callback => {
        try {
            const data = await PostModel.find({})
            callback(data);
        } catch (error) {
            console.log(error);
            callback(false);
        }
            
    },
    getPostById: async (id, callback) => {
        try {
            const data = await PostModel.findById(id);
            callback(data);
        } catch (err) {
            console.log(err);
        }
    },
    addPost: async (name, caption, url, cloudinary_id, callback) => {
        try { 
            const res = await PostModel.insertMany({name, caption, url, cloudinary_id})
            callback(res);
        } catch (error) {
            console.log(error)
            callback(false);
        }
    },
    deletePostById: async (id, callback) => {
        try {
            const res = await PostModel.findByIdAndDelete(id);
            callback(res);
        } catch (err) {
            console.log(err);
            callback(false)
        }
    }
}


