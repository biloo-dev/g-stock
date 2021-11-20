'use strict'

const bcrypt = require('bcrypt') 
const createGuts = require('../helpers/model-guts')

const name = 'User'
const tableName = 'users'

// Properties that are allowed to be selected from the database for reading.
// (e.g., `password` is not included and thus cannot be selected)
const selectableProps = [
  'id',
  'name',
  'username',
  'password',
  'updated_at',
  'created_at'
]

// Bcrypt functions used for hashing password and later verifying it.
const SALT_ROUNDS = 10
const hashPassword = password => bcrypt.hash(password, SALT_ROUNDS)
const verifyPassword = (password, hash) => bcrypt.compare(password, hash)

// Always perform this logic before saving to db. This includes always hashing
// the password field prior to writing so it is never saved in plain text.
const beforeSave = user => {
  if (!user.password) return Promise.resolve(user)

  // `password` will always be hashed before being saved.
  return hashPassword(user.password)
    .then(hash => ({ ...user, password: hash }))
    .catch(err => `Error hashing password: ${err}`)
}

module.exports = knex => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps
  })

  // Augment default `create` function to include custom `beforeSave` logic.
  const create = props => beforeSave(props)
    .then(user => guts.create(user))

  const verify = async (username, password) => {  
    let user = await knex.select()
      .from(tableName)
      .first()
      .where({ username })
      .timeout(guts.timeout)  
    if (!user) return false
    let isMatch = await verifyPassword(password, user.password) 
    if (!isMatch) return false
    return user  
  }

  return {
    ...guts,
    create,
    verify
  }
}
