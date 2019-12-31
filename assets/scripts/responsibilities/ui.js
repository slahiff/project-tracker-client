'use strict'

const showResponsibilitiesTemplate = require('../templates/responsibility-listing.handlebars')
const showResponsibilityTemplate = require('../templates/show-responsibility.handlebars')

const onRCrudSuccess = message => {
  $('#user-message-responsibility').html()
  $('#user-message-responsibility')
    .removeClass('alert-danger', 'alert-success')
    .addClass('alert-success')
    .text(message)
    .show()

  setTimeout(function () {
    $('#user-message-responsibility').fadeOut('fast')
  }, 3000)

  $('form').trigger('reset')
  $('#user-message-responsibility').trigger('reset')
}

const onRCrudFailure = message => {
  $('#user-message-responsibility').html()
  $('#user-message-responsibility')
    .removeClass('alert-success', 'alert-danger')
    .addClass('alert-danger')
    .text(message)
    .show()

  setTimeout(function () {
    $('#user-message-responsibility').fadeOut('fast').html()
  }, 3000)
}

const onIndexFailure = error => {
  $('#table-responsibility').find('#tbody-responsibility').append(error)
}

const onIndexSuccess = data => {
  const showResponsibilityHtml = showResponsibilitiesTemplate({ responsibilities: data.responsibilities })

  $('#table-responsibility').find('#tbody-responsibility').empty()
  $('#table-responsibility').find('#tbody-responsibility').append(showResponsibilityHtml)
  $('#user-message-responsibility').empty()
  $('#message').show()

  onRCrudSuccess('Successfully retrieved all user responsibilities.')
}

const onShowResponsibilityFailure = () => {
  onRCrudFailure('Enter a valid responsibility ID!')
}

const onShowResponsibilitySuccess = data => {
  const showResponsibilityHtml = showResponsibilityTemplate({ responsibility: data.responsibility })

  $('#table-responsibility').find('#tbody-responsibility').empty()
  $('#table-responsibility').find('#tbody-responsibility').html(showResponsibilityHtml)
  $('#user-message').empty()
  $('#message').show()

  onRCrudSuccess('You successfully retrieved a responsibility!')
}

const onCreateResponsibilitySuccess = data => {
  onRCrudSuccess('You successfully created a new responsibility!')
}

const onCreateResponsibilityFailure = error => {
  $('#user-message')
    .removeClass('alert-success')
    .addClass('alert-danger')
    .text(error)
}

const onUpdateResponsibilitySuccess = data => {
  onRCrudSuccess('Responsibility successfully updated!')
}

const onUpdateResponsibilityFailure = data => {
  onRCrudFailure('Error: Responsibility could not be updated.')
}

const onDeleteResponsibilitySuccess = data => {
  onRCrudSuccess('Responsibility successfully deleted!')
}

const onDeleteResponsibilityFailure = data => {
  onRCrudFailure('Error: Responsibility could not be deleted.')
}

module.exports = {
  onRCrudSuccess,
  onRCrudFailure,
  onIndexFailure,
  onIndexSuccess,
  onShowResponsibilityFailure,
  onShowResponsibilitySuccess,
  onCreateResponsibilitySuccess,
  onCreateResponsibilityFailure,
  onUpdateResponsibilitySuccess,
  onUpdateResponsibilityFailure,
  onDeleteResponsibilitySuccess,
  onDeleteResponsibilityFailure
}
