'use strict'

const showProjectsTemplate = require('../templates/project-listing.handlebars')

$('.after-auth').hide()
$('.before-auth').show()

const onCrudSuccess = message => {
  $('#user-message').html()
  $('#user-message')
    .removeClass('alert-danger', 'alert-success')
    .addClass('alert-success')
    .text(message)
    .show()

  setTimeout(function () {
    $('#user-message').fadeOut('fast')
  }, 3000)

  $('form').trigger('reset')
  $('#user-message').trigger('reset')
}

const onCrudFailure = message => {
  $('#user-message').html()
  $('#user-message')
    .removeClass('alert-success', 'alert-danger')
    .addClass('alert-danger')
    .text(message)
    .show()

  setTimeout(function () {
    $('#user-message').fadeOut('fast').html()
  }, 3000)
}

const onIndexFailure = error => {
  $('#table').find('tbody').append(error)
}

const onIndexSuccess = data => {
  const showProjectsHtml = showProjectsTemplate({ projects: data.projects })

  $('#table').find('tbody').empty()
  $('#table').find('tbody').html(showProjectsHtml)
  $('#user-message').empty()
  $('#message').show()

  onCrudSuccess('Successfully retrieved all projects.')

  // old for loop and jquery
  // for (let i = 0; i < projects.length; i++) {
  //   const num = i + 1
  //   const id = projects[i].id
  //   const name = projects[i].name
  //   const status = projects[i].status
  //   const owner = projects[i].user.email
  //
  //   $('#table').append('<tr><th scope="row">' + num + '</th>' +
  //   '<td>' + id + '</td><td>' + name + '</td><td>' + status + '</td><td>' + owner + '</td></tr>')
  //
  //   onCrudSuccess('Successfully retrieved all projects.')
  // }
}

// const onShowUserProjectsFailure = error => {
//   $('#table').find('tbody').append(error)
// }
//
// const onShowUserProjectsSuccess = data => {
//   $('#table').find('tbody').empty()
//
//   const projects = data.projects
//
//   const userProjects = projects.filter(onIndexSuccess.user.email => store.user.email)
//
//   for (let i = 0; i < userProjects.length; i++) {
//     const num = i + 1
//     const id = userProjects[i].id
//     const name = userProjects[i].name
//     const status = userProjects[i].status
//     const owner = userProjects[i].user.email
//
//     // const userProjects = projects.filter(owner => store.user.email)
//
//     $('#table').append('<tr><th scope="row">' + num + '</th>' + '<td>' + id + '</td><td>' + name + '</td><td>' + status + '</td><td>' + owner + '</td></tr>')
//   }
// }

const onShowProjectFailure = () => {
  onCrudFailure('Enter a valid project ID!')
}

const onShowProjectSuccess = data => {
  $('#table').find('tbody').empty()

  const project = data.project
  const num = 1
  const id = project.id
  const name = project.name
  const status = project.status
  const owner = project.user.email

  $('#table').append('<tr><th scope="row">' + num + '</th>' + '<td>' + id + '</td><td>' + name + '</td><td>' + status + '</td><td>' + owner + '</td></tr>')
  onCrudSuccess('You successfully retrieved a project!')
}

const onCreateProjectSuccess = data => {
  onCrudSuccess('You successfully created a new project!')
}

const onCreateProjectFailure = error => {
  $('#user-message')
    .removeClass('alert-success')
    .addClass('alert-danger')
    .text(error)
}

const onUpdateProjectSuccess = data => {
  onCrudSuccess('Project successfully updated!')
}

const onUpdateProjectFailure = data => {
  onCrudFailure('Error: Project could not be updated.')
}

const onDeleteProjectSuccess = data => {
  onCrudSuccess('Project successfully deleted!')
}

const onDeleteProjectFailure = data => {
  onCrudFailure('Error: Project could not be deleted.')
}

module.exports = {
  onCrudSuccess,
  onCrudFailure,
  onIndexFailure,
  onIndexSuccess,
  onShowProjectFailure,
  onShowProjectSuccess,
  onCreateProjectSuccess,
  onCreateProjectFailure,
  onUpdateProjectSuccess,
  onUpdateProjectFailure,
  onDeleteProjectSuccess,
  onDeleteProjectFailure
  // onShowUserProjectsFailure,
  // onShowUserProjectsSuccess
}
