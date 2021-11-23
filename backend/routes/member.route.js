
const express = require('express');
const MemberRoutes = express.Router();

// Require Business model in our routes module
let Person = require('../models/Member');

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
    Person.findById(req.params.id, function(err, person) {
        if (!person)
            res.status(404).send("data is not found");
        else {
            console.log(person);
            person.name = req.body.name;
            person.company = req.body.company;
            person.age = req.body.age;

            person.save().then(business => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
MemberRoutes.route('/delete/:id').get(function (req, res) {
    Person.findByIdAndRemove({_id: req.params.id}, function(err, person){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = MemberRoutes;