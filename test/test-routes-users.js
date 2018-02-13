const chai = require('chai')

chai.use(require('chai-http'))
const expect = chai.expect

const User = require('../models/User')

const { app, runServer, closeServer } = require('../server.js')

describe('User router', () => {
  before(runServer)
  after(closeServer)

  describe('/User', () => {
    it('exposes a list of all users and their passwords', () => {
      return chai.request(app)
        .get('/User')
        .then(res => {
          expect(res).to.have.status(200)
          expect(res).to.be.json
          expect(res.body).to.be.an('array')
        })
    })
    it('creates a new user', (done) => {
      const newUser = new User({
        email: "dummyuser@test.com",
        password: "p@ssword"
      })
      chai.request(app)
        .post('/User')
        .send(newUser)
        .then(res => {
          expect(res).to.have.status(201)
          expect(res.body).to.be.an('object')
          expect(res.body.id).to.not.equal(null)
        })
        done() 
    })
  })

  describe('/User/:id', () => {
    it('exposes a user by id', ()=>  {
      const user = new User({
        email: "userid@test.com",
        password: "passw0rd"
      })
      return user.save()
        .then(() => {
          return chai.request(app)
            .get(`/User/${user._id}`)
        })
        .then(res => {
          expect(res).to.have.status(200)
          expect(res).to.be.json
          expect(res.body).to.be.an('object')
        })
    })
  });
});
