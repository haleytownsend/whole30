const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  body: String
})

schema.methods.apiRepr = function () {
  const repr = { id: this._id }

  Object.keys(this).forEach(key => {
    if (key !== '_id') Object.assign(repr, { [key]: this[key] })
  })

  return repr
}

const Recipe = mongoose.model('Recipe', schema)
console.log(Recipe.Schema)

module.exports = Recipe
