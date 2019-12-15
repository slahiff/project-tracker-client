'use strict'

const store = require('../store')

const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#message')
    .removeClass('success')
    .addClass('failure')
    .text(message).hide()
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
  console.log(store)
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
  onSignOutFailure
}
