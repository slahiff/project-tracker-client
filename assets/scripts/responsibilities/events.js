'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onIndexResponsibilities = () => {
  event.preventDefault()

  api.indexResponsibilities()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowResponsibility = event => {
  event.preventDefault()
  const form = event.target
  const responsibilityData = getFormFields(form)

  api.showResponsibility(responsibilityData)
    .then(ui.onShowResponsibilitySuccess)
    .catch(ui.onShowResponsibilityFailure)
}

const onCreateResponsibility = event => {
  event.preventDefault()
  const form = event.target
  const responsibilityData = getFormFields(form)

  api.createResponsibility(responsibilityData)
    .then(ui.onCreateResponsibilitySuccess)
    .catch(ui.onCreateResponsibilityFailure)
}

const onUpdateResponsibility = event => {
  event.preventDefault()
  const form = event.target
  const responsibilityData = getFormFields(form)

  api.updateResponsibility(responsibilityData)
    .then(ui.onUpdateResponsibilitySuccess)
    .catch(ui.onUpdateResponsibilityFailure)
}

const onDeleteResponsibility = event => {
  event.preventDefault()
  const form = event.target
  const responsibilityData = getFormFields(form)

  api.destroyResponsibility(responsibilityData)
    .then(ui.onDeleteResponsibilitySuccess)
    .catch(ui.onDeleteresponsibilityFailure)
}

const addHandlers = event => {
  $('#index-responsibilities').on('click', onIndexResponsibilities)
  $('#show-responsibility').on('submit', onShowResponsibility)
  $('#create-responsibility').on('submit', onCreateResponsibility)
  $('#update-responsibility').on('submit', onUpdateResponsibility)
  $('#destroy-responsibility').on('submit', onDeleteResponsibility)
}

module.exports = {
  addHandlers
}
