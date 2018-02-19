
import React from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'

import UserPage from './components/UserPage'
import Home from './components/Home'
import UserForm from './components/UserForm'
import UserShow from './components/UserShow'
import NavBar from './components/NavBar'


const history = createHistory()
const store = configureStore(history)
console.log(store)

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
      <Route exact path="/nav" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={UserPage} />
      <Route exact path="/new-user" component={UserForm} />
      <Route path='/users/:userId' component={UserShow} />
      </div>
    </ConnectedRouter>
  </Provider>
)

export default Root