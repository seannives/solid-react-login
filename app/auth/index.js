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
  * @param  {string} webid The webid of the user
  */
  login (webid) {
    if (auth.loggedIn()) return Promise.resolve(true)

    // Post a fake request
    /*return request.post('/login', {webid, password})
      .then(response => {
        // Save token to local storage
        console.log("woo")
        localStorage.token = response.token
        return Promise.resolve(true)
      })*/
    let config = {
      method: 'head',
      //url: 'https://seannives2.databox.me',
      url: webid,
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
  * @param  {string} webid The webid of the user
  */
  register (webid) {
    // Post a fake request
    return request.post('/register', {webid})
      // Log user in after registering
      .then(() => auth.login(webid))
  },
  onChange () {}
}

export default auth
