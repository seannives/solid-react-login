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
