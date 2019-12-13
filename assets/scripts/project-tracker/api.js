'use strict'

const config = require('../config')
// const store = require('../store')

const indexProjects = () => {
  return $.ajax({
    url: config.apiUrl + '/projects',
    method: 'GET'
  })
}

module.exports = {
  indexProjects
}
