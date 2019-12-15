'use strict'

// const store = require('../store')

const onIndexFailure = error => {
  console.error(error)
}

const onIndexSuccess = response => {
  const projects = response.projects
  let projectHtml = ''

  projects.forEach(project => {
    projectHtml += `
      <h4>${project.name}</h4>
      <h5>${project.description}</h5>
      <p>${project.id}</p>
    `
  })

  $('#results').html(projectHtml)
}

module.exports = {
  onIndexFailure,
  onIndexSuccess
}
