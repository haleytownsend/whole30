const User = require('../models/User')

const router = require('express').Router()

router.get('/', (req, res) => {
  User.find().exec()
    .then(docs => res.status(200).json(docs).end())
    .catch(err => res.status(500).json(err).end())
})

router.post('/', (req, res) => {
  Promise.resolve()
    .then(() => ['email', 'password'].forEach(field => {
      if (!(field in req.body)) {
        throw new Error('\'${field}\' is not in the request body')
      }
    }))
    .then(() => User.create({
      email: req.body.email,
      password: req.body.password
    }))
    .then(user => res.status(201).json(user).end())
    .catch(message => res.status(400).json({ error: true, message }).end())
})

router.get('/:id', (req, res) => {
  User.findById(req.params['id']).exec()
    .then(user => {
      res.status(200).json(user).end()
    })
    .catch(message => res.status(404).json({ error: true, message }).end())
})

module.exports = router
