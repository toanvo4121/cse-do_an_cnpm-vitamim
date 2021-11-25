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
UploadRouter.route('/like/:id').post(function (req, res) {
    Img.findById(req.params.id,function(err,img){
        if(err){
            console.log(err);
        }
        else {
            img.likers = img.likers.concat(req.body.likers),
            img.save()
            .then(img => {
                res.status(200).json({'Img': 'Img in added successfully'});
            })
            .catch(err => {
                res.status(400).send("unable to save to database");
            });
        }
    });
});
UploadRouter.route('/dislike/:id').post(function (req, res) {
    Img.findById(req.params.id,function(err,img){
        if(err){
            console.log(err);
        }
        else {
            img.haters = img.haters.concat(req.body.haters),
            img.save()
            .then(img => {
                res.status(200).json({'Img': 'Img in added successfully'});
            })
            .catch(err => {
                res.status(400).send("unable to save to database");
            });
        }
    });
});

UploadRouter.route('/delete/:id').post(function (req, res) {
    Img.findByIdAndRemove({_id: req.params.id}, function(err, person){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});
module.exports = UploadRouter;

