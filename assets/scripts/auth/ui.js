'use strict'

const store = require('../store')
$('.after-auth').hide()
$('.before-auth').show()

const onSuccess = message => {
  $('#message')
    .removeClass('alert-danger', 'alert-success')
    .addClass('alert-success')
    .html(message + `<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span></button>`)
    .show()

  setTimeout(function () {
    $('#message').fadeOut('fast')
  }, 3000)

  $('form').trigger('reset')
}

const dismissAlert = () => {
  $('.alert').alert('close')
}

const onFailure = message => {
  $('#message')
    .removeClass('alert-success')
    .addClass('alert-danger')
    .html(message + `<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span></button>`)

  setTimeout(function () {
    $('#message').fadeOut('fast')
  }, 3000)

  $('form').trigger('reset')
}

const onSignupSuccess = () => {
  onSuccess('You successfully signed up. Now sign in!')
}

const onSignupFailure = () => {
  onFailure('Hmmm.. something went wrong. Try again.')
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  // console.log(store)
  onSuccess('You successfully signed in!')
  $('.after-auth').show()
  $('.before-auth').hide()
}

const onSignInFailure = () => {
  onFailure('Hmmm.. something went wrong. Try again.')
}

const onChangePasswordSuccess = () => {
  onSuccess('You successfully changed your password!')
}

const onChangePasswordFailure = () => {
  onFailure('Hmmm.. something went wrong. Try again.')
}

const onSignOutSuccess = () => {
  onSuccess('You have successfully logged out!')
  store.user = {}
  $('.after-auth').hide()
  $('.before-auth').show()
}

const onSignOutFailure = () => {
  onFailure('Hmmm.. something went wrong. Try again.')
}

module.exports = {
  onSuccess,
  onFailure,
  onSignupSuccess,
  onSignupFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  dismissAlert
}
