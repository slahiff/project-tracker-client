'use strict'

const config = require('../config')
const store = require('../store')

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
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const destroyProject = formData => {
  return $.ajax({
    url: config.apiUrl + '/projects/' + formData.project.id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateProject = formData => {
  return $.ajax({
    url: config.apiUrl + '/projects/' + formData.project.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
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
