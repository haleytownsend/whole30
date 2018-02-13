const chai = require('chai')

chai.use(require('chai-http'))
const expect = chai.expect

const Recipe = require('../models/Recipe')

const { app, runServer, closeServer } = require('../server.js')

describe('Recipe router', () => {
  before(runServer)
  after(closeServer)

  describe('/Recipe', () => {
    it('exposes a list of all recipes', () => {
      return chai.request(app)
        .get('/Recipe')
        .then(res => {
          expect(res).to.have.status(200)
          expect(res).to.be.json
          expect(res.body).to.be.an('array')
        })
    })
    it('creates a new recipe', (done) => {
      const newRecipe = new Recipe({
        title: "Tester Recipe",
        ingredients: ['testerIngredient1'],
        body: "Dummy body for testing"
      })
      chai.request(app)
        .post('/Recipe')
        .send(newRecipe)
        .then(res => {
          expect(res).to.have.status(201)
          expect(res.body).to.be.an('object')
          expect(res.body.id).to.not.equal(null)
        })
        done()
    })
  })

  describe('/Recipe/:id', () => {
    it('exposes a single recipe', ()=>  {
      const recipe = new Recipe({
        title: "Tester Recipe for single id",
        ingredients: ['testerIngredient1', 'testerIngredient2'],
        body: "Dummy body for testing"
      })
      return recipe.save()
        .then(() => {
          return chai.request(app)
            .get(`/Recipe/${recipe._id}`)
        })
        .then(res => {
          expect(res).to.have.status(200)
          expect(res).to.be.json
          expect(res.body).to.be.an('object')
        })

    })
    it('deletes a single recipe', () => {
      return Recipe.create({
        title: "Tester Recipe for DELETE",
        ingredients: ['testerIngredient1', 'testerIngredient2'],
        body: "Adding a recipe for delete test"
      })
      .then(recipe => {
        return chai.request(app)
          .delete(`/Recipe/${recipe._id}`)
          .end()
      })
      .then(res => expect(res).to.have.status(204))
    });
  });
});
