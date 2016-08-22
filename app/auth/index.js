import request from './fakeRequest'

import axios from 'axios'


let localStorage

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage')
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage
}

let auth = {
  /**
  * Logs a user in, returning a promise with `true` when done
  * @param  {string} username The username of the user
  */
  login (username) {
    if (auth.loggedIn()) return Promise.resolve(true)

    // Post a fake request
    /*return request.post('/login', {username, password})
      .then(response => {
        // Save token to local storage
        console.log("woo")
        localStorage.token = response.token
        return Promise.resolve(true)
      })*/
    let config = {
      method: 'head',
      //url: 'https://seannives2.databox.me',
      url: username,
      withCredentials: true
    }
    /*
      TODO:
        - If the url isn't prefaced with http(s) then it'll default to localhost,
          so put some checking on that.
        - Handle error conditions
        - Put something better than the webid into the local storage token.

    */
    return axios(config)
      .then(response => {
        console.log('wooo, from axios')
        console.log(response)
        localStorage.token = response.headers.user
        return Promise.resolve(true)
      })
  },
  /**
  * Logs the current user out
  */
  logout () {
    return request.post('/logout')
  },
  /**
  * Checks if a user is logged in
  */
  loggedIn () {
    return !!localStorage.token
  },
  /**
  * Registers a user and then logs them in
  * @param  {string} username The username of the user
  */
  register (username) {
    // Post a fake request
    return request.post('/register', {username})
      // Log user in after registering
      .then(() => auth.login(username))
  },
  onChange () {}
}

export default auth
