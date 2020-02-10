// controller
const mongoose = require('mongoose');
const Drawers = mongoose.model('Drawers');
const Review = mongoose.model('Review');

module.exports = {

    showAll: (req, res) => {
        Drawers.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    show: (req, res) => {
        Drawers.findOne({
                _id: req.params.id
            })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    create: (req, res) => {
        Drawers.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    update: (req, res) => {
        Drawers.findByIdAndUpdate(req.params.id, req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    delete: (req, res) => {
        Drawers.findByIdAndDelete(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    review: (req, res) => {
        Review.create(req.body)
            .then(review => {
                Drawers.findByIdAndUpdate(req.params.id, {$push: {reviews: review}})
                .then(data => res.json(data))
                .catch(err => res.json(err))
            })
            .catch(err => res.json(err))
    }









}