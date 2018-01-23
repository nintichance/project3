import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  componentWillMount() {
    //Call to API for user data
    axios.get('http://localhost:4000/api/users'
    )
      .then(response => {
        const data = response.data
        document.window.append(data);
      })
  }
  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;
