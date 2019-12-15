'use strict'

const config = require('../config')
// const store = require('../store')

const indexProjects = () => {
  return $.ajax({
    url: config.apiUrl + '/projects',
    method: 'GET'
  })
}

const showProject = formData => {
  return $.ajax({
    url: config.apiUrl + '/projects/' + formData.project.id,
    method: 'GET'
  })
}

const createProject = formData => {
  return $.ajax({
    url: config.apiUrl + '/projects',
    method: 'POST',
    data: formData
  })
}

const destroyProject = formData => {
  return $.ajax({
    url: config.apiUrl + '/projects/' + formData.project.id,
    method: 'DELETE'
  })
}

const updateProject = formData => {
  return $.ajax({
    url: config.apiUrl + '/projects/' + formData.project.id,
    method: 'PATCH',
    data: formData
  })
}

module.exports = {
  indexProjects,
  showProject,
  createProject,
  destroyProject,
  updateProject
}
