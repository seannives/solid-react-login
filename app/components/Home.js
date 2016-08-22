import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  render () {
    return (
      <article>
        <div>
          <section className='text-section'>
            <h1>Welcome to Solid Login Flow</h1>
            <p>This application demonstrates what a React-based register/login workflow might look like with <a href='https://github.com/yelouafi/redux-saga'>redux-saga</a> against a <a href='https://solid.mit.edu/'>Solid</a> server.</p>

            <p>It's based on Juan Soto's <a href='https://github.com/sotojuan/saga-login-flow'>sage-login-flow</a> which is based on Max Stoiber's <a href='https://github.com/mxstbr/login-flow'>login-flow</a>.</p>

            <p>Try logging in with a <a href='http://webid.info/'>WebID</a>!</p>
          </section>
          <section className='text-section'>
            <p>Todo:</p>
              <ul>
                <li>Fix wildly broken tests</li>
                <li>Fix auth to handle errors (see TODOs in <code>app/auth/index.js</code></li>
                <li>Make Registration work</li>
                <li>Spit out a sampling of whatever data lurks under the user's WebID</li>
                <li>Explore <a href='https://melvincarvalho.gitbooks.io/solid-tutorials/content/chapter1.html'>Melvin's tutorial</a> and <a href='https://github.com/solid/solid-signup'>solid-signup</a> for more ideas.</li>
                <li>Switch this all over to using the <a href='https://github.com/solid/solid-client'>solid-client</a>
              </ul>
          </section>
        </div>
      </article>
    )
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Home)
