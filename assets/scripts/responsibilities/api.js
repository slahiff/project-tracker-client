'use strict'

const config = require('../config')
const store = require('../store')

const indexResponsibilities = () => {
  return $.ajax({
    url: config.apiUrl + '/responsibilities',
    method: 'GET'
  })
}

const showResponsibility = formData => {
  return $.ajax({
    url: config.apiUrl + '/responsibilities/' + formData.responsibility.id,
    method: 'GET'
  })
}

const createResponsibility = formData => {
  return $.ajax({
    url: config.apiUrl + '/responsibilities',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const destroyResponsibility = formData => {
  return $.ajax({
    url: config.apiUrl + '/responsibilities/' + formData.responsibility.id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateResponsibility = formData => {
  return $.ajax({
    url: config.apiUrl + '/responsibilities/' + formData.responsibility.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

module.exports = {
  indexResponsibilities,
  showResponsibility,
  createResponsibility,
  destroyResponsibility,
  updateResponsibility
}
