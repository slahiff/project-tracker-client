'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onIndexProjects = () => {
  event.preventDefault()

  api.indexProjects()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowUserProjects = event => {
  event.preventDefault()

  api.indexProjects()
    .then(ui.onShowUserProjectsSuccess)
    .catch(ui.onShowUserProjectsFailure)
}

const onShowProject = event => {
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
    .then(ui.onCreateProjectSuccess)
    .catch(ui.onCreateProjectFailure)
}

const onUpdateProject = event => {
  event.preventDefault()
  const form = event.target
  const projectData = getFormFields(form)

  api.updateProject(projectData)
    .then(ui.onUpdateProjectSuccess)
    .catch(ui.onUpdateProjectFailure)
}

const onDeleteProject = event => {
  event.preventDefault()
  const form = event.target
  const projectData = getFormFields(form)

  api.destroyProject(projectData)
    .then(ui.onDeleteProjectSuccess)
    .catch(ui.onDeleteProjectFailure)
}

// loads page with project index
window.onload = function () {
  onIndexProjects()
}

const addHandlers = event => {
  $('#index').on('click', onIndexProjects)
  $('#show-user-projects').on('click', onShowUserProjects)
  $('#show-project').on('submit', onShowProject)
  $('#create-project').on('submit', onCreateProject)
  $('#update-project').on('submit', onUpdateProject)
  $('#destroy-project').on('submit', onDeleteProject)
}

module.exports = {
  addHandlers
}
