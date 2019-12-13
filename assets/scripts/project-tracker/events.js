'use strict'

const api = require('./api')
// const ui = require('./ui')
// const getFormFields = require('../../../lib/get-form-fields')

const onIndexProjects = event => {
  event.preventDefault()

  api.indexProjects()
    .then(console.log)
    .catch(console.error)
}

const addHandlers = event => {
  $('#index-projects').on('click', onIndexProjects)
}

module.exports = {
  addHandlers
}
