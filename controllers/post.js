const express = require("express");
const streamifier = require("streamifier");
const fileUpload = require("./multer");
const cloudinary = require("../modals/cloudinary");
const { getPosts, addPost, getPostById, deletePostById } = require("../modals/post");

let router = express.Router();

router.get("/get", (_, res) => {
    getPosts(data => {
        if (data)
            res.json({success: true, data});
        else
            res.json({success: false});
    });
});

router.get("/post/:id", (req, res) => {
    const id = req.params.id;
    if (id.length !== 24) res.json({success: false})
    else getPostById(id, data => {
        if (data)
            res.json({success: true, data});
        else
            res.json({success: false});
    });
});

router.delete("/post/:id", (req, res) => {
    const id = req.params.id;
    if(id.length !== 24) res.json({success: false})
    else deletePostById(id, async data => {
        if (data) {
            //  delete img from cloudinary
            await cloudinary.uploader.destroy(data.cloudinary_id);
            //  send success as response
            res.json({success: true, data});
        }
        else
            res.json({success: false});
    });
});

router.post('/post', fileUpload.single("File"), async (req, res) => {
    const { name, caption } = req.body;
    streamifier.createReadStream(req.file.buffer).pipe(cloudinary.uploader.upload_stream({
            folder: "React-app-0"
        },
        (err, result) => {
            if (result) {
                const cloudinary_id = result.public_id; 
                const url = result.secure_url;
                addPost(name, caption, url, cloudinary_id, data => {
                    if (data)
                        res.json({success: true, data});
                    else
                        res.json({success: false});
                })
            }
            else {
                console.log(err);
                res.json({success: false});
            }
        }
    ))
})



module.exports = router;