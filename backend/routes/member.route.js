
const express = require('express');
const MemberRoutes = express.Router();

// Require Business model in our routes module
let Person = require('../models/MemberModel');

// Defined store route
MemberRoutes.route('/signup').post(function (req, res) {
    let person = new Person(req.body);
    person.save()
        .then(person => {
            res.status(200).json({'person': 'person in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
MemberRoutes.route('/').get(function (req, res) {
    Person.find(function(err, persons){
        if(err){
            console.log(err);
        }
        else {
            res.json(persons);
        }
    });
});
// Defined edit route
MemberRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Person.findById(id, function (err, business){
        res.json(business);
    });
});

//  Defined update route
MemberRoutes.route('/update/:id').post(function (req, res) {
    Person.findById(req.params.id,function(err,persons){
        if(err){
            console.log(err);
        }
        else {
            persons.email = req.body.email,
            persons.so_bai_viet = req.body.so_bai_viet,
            persons.ho = req.body.ho;
            persons.ten = req.body.ten;
            persons.ten_tai_khoan = req.body.ten_tai_khoan;
            persons.slogan = req.body.slogan;
            persons.ngay_sinh = req.body.ngay_sinh;
            persons.thang_sinh = req.body.thang_sinh;
            persons.nam_sinh = req.body.nam_sinh;
            persons.gioi_tinh = req.body.gioi_tinh;
            persons.avatar = req.body.avatar;
            persons.save()
            .then(persons => {
                res.status(200).json({'person': 'person in added successfully'});
            })
            .catch(err => {
                res.status(400).send("unable to save to database");
            });
        }
    })

});

//
// Defined delete | remove | destroy route
MemberRoutes.route('/delete/:id').get(function (req, res) {
    Person.findByIdAndRemove({_id: req.params.id}, function(err, person){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = MemberRoutes;