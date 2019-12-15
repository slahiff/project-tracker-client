'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onIndexProjects = () => {
  api.indexProjects()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowProject = event => {
  event.preventDefault()
  const form = event.target
  const projectData = getFormFields(form)

  api.showProject(projectData)
    .then(console.log)
    .catch(console.error)
}

const onCreateProject = event => {
  event.preventDefault()
  const form = event.target
  const projectData = getFormFields(form)

  api.createProject(projectData)
    .then(console.log)
    .catch(console.error)
}

const addHandlers = event => {
  $('#index-projects').on('submit', onIndexProjects)
  $('#show-project').on('submit', onShowProject)
  $('#create-project').on('submit', onCreateProject)
}

module.exports = {
  addHandlers
}
