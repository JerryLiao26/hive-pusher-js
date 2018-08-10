'use strict'
const request = require('request')

class Pusher {
  constructor(path, token) {
    this.path = path
    this.token = token
  }

  setPath(path) {
    this.path = path
  }

  setToken(token) {
    this.token = token
  }

  send(message) {
    request({
      url: this.path,
      method: 'POST',
      form: JSON.stringify({ text: message, token: this.token })
    }, function(error, response, body) {
      const data = JSON.parse(body)
      if (error) {
        console.error('[hive-pusher]', error)
      } else {
        if (data.code !== 200) {
          console.error('[hive-pusher]', data.text)
        }
      }
    })
  }
}

module.exports = Pusher
