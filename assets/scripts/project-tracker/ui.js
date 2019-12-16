'use strict'

const onIndexFailure = error => {
  $('#table').find('tbody').append(error)
}

const onIndexSuccess = data => {
  $('#table').find('tbody').empty()

  const projects = data.projects

  for (let i = 0; i < projects.length; i++) {
    const num = i + 1
    const id = projects[i].id
    const name = projects[i].name
    const status = projects[i].status
    const owner = projects[i].user.email

    $('#table').append('<tr><th scope="row">' + num + '</th>' + '<td>' + id + '</td><td>' + name + '</td><td>' + status + '</td><td>' + owner + '</td></tr>')
  }
}

const onShowProjectFailure = error => {
  $('#table').find('tbody').append(error)
}

const onShowProjectSuccess = data => {
  $('#table').find('tbody').empty()

  const project = data.project
  const num = 1
  const id = project.id
  const name = project.name
  const owner = project.user.email

  $('#table').append('<tr><th scope="row">' + num + '</th>' + '<td>' + id + '</td><td>' + name + '</td><td>' + status + '</td><td>' + owner + '</td></tr>')
}

// const onShowProjectFailure = error => {
//   $('#table').find('tbody').append(error)

//
// const onShowProjectSuccess = data => {
//   $('table').find('tbody').empty()
// }

// let projectHtml = ''
//
// projects.forEach(project => {
//   projectHtml += `
//
//     <p>Project ID: ${project.id}</p>
//     <p>Title: ${project.name}</p>
//     <p>Decsription: ${project.description}</p>
//     <p>Status: ${project.status}</p>
//     <p>Owner: ${project.user.id}</p>
//     <hr>
//   `

// $('#table').html(projectHtml)

module.exports = {
  onIndexFailure,
  onIndexSuccess,
  onShowProjectFailure,
  onShowProjectSuccess
}
