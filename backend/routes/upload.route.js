const express = require('express');
const UploadRouter = express.Router();

// Require Business model in our routes module
let Img = require('../models/MimModel');

// Defined store route
UploadRouter.route('/img').post(function (req, res) {
    let img = new Img(req.body);
    img.save()
        .then(img => {
            res.status(200).json({'img': 'img in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});
UploadRouter.route('/').get(function (req, res) {
    Img.find(function(err, img){
        if(err){
            console.log(err);
        }
        else {
            res.json(img);
        }
    });
});
module.exports = UploadRouter;

