'use strict'

const showProjectsTemplate = require('../templates/project-listing.handlebars')
const showProjectTemplate = require('../templates/show-project.handlebars')

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
}

const onShowProjectFailure = () => {
  onCrudFailure('Enter a valid project ID!')
}

const onShowProjectSuccess = data => {
  const showProjectHtml = showProjectTemplate({ project: data.project })

  $('#table').find('tbody').empty()
  $('#table').find('tbody').html(showProjectHtml)
  $('#user-message').empty()
  $('#message').show()

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
