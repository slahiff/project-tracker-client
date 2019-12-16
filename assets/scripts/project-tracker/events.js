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
  console.log('clicky!')
  event.preventDefault()
  const form = event.target
  const projectData = getFormFields(form)

  api.showProject(projectData)
    .then(ui.onShowProjectSuccess)
    .catch(ui.onShowProjectFailure)
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
  $('#index').on('click', onIndexProjects)
  $('#show-project').on('submit', onShowProject)
  $('#create-project').on('submit', onCreateProject)
}

module.exports = {
  addHandlers
}
