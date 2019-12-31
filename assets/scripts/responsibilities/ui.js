'use strict'

const showResponsibilitiesTemplate = require('../templates/responsibility-listing.handlebars')
const showResponsibilityTemplate = require('../templates/show-responsibility.handlebars')

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
  $('#table-responsibility').find('tbody-responsibility').append(error)
}

const onIndexSuccess = data => {
  const showResponsibilityHtml = showResponsibilitiesTemplate({ responsibilities: data.responsibilities })

  $('#table-responsibility').find('tbody-responsibility').empty()
  $('#table-responsibility').find('tbody-responsibility').html(showResponsibilityHtml)
  $('#user-message').empty()
  $('#message').show()

  onCrudSuccess('Successfully retrieved all responsibilities.')
}

const onShowResponsibilityFailure = () => {
  onCrudFailure('Enter a valid responsibility ID!')
}

const onShowResponsibilitySuccess = data => {
  const showResponsibilityHtml = showResponsibilityTemplate({ responsibility: data.responsibility })

  $('#table-responsibility').find('tbody-responsibility').empty()
  $('#table-responsibility').find('tbody-responsibility').html(showResponsibilityHtml)
  $('#user-message').empty()
  $('#message').show()

  onCrudSuccess('You successfully retrieved a responsibility!')
}

const onCreateResponsibilitySuccess = data => {
  onCrudSuccess('You successfully created a new responsibility!')
}

const onCreateResponsibilityFailure = error => {
  $('#user-message')
    .removeClass('alert-success')
    .addClass('alert-danger')
    .text(error)
}

const onUpdateResponsibilitySuccess = data => {
  onCrudSuccess('Responsibility successfully updated!')
}

const onUpdateResponsibilityFailure = data => {
  onCrudFailure('Error: Responsibility could not be updated.')
}

const onDeleteResponsibilitySuccess = data => {
  onCrudSuccess('Responsibility successfully deleted!')
}

const onDeleteResponsibilityFailure = data => {
  onCrudFailure('Error: Responsibility could not be deleted.')
}

module.exports = {
  onCrudSuccess,
  onCrudFailure,
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
