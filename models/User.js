const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  email: String,
  password: String
})

schema.methods.apiRepr = function () {
  const repr = { id: this._id }

  Object.keys(this).forEach(key => {
    if (key !== '_id') Object.assign(repr, { [key]: this[key] })
  })

  return repr
}

const User = mongoose.model('User', schema)
console.log(User.Schema)

module.exports = User
