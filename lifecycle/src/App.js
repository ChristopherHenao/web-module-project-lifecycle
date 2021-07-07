import React from 'react'
import axios from 'axios'
import UserCard from './UserCard'

class App extends React.Component {

  state = {
    user: [],
    userFollowers: []
  }

  componentDidMount() {
    // Promise.all([
    //   axios.get('https://api.github.com/users/ChristopherHenao'),
    //   axios.get('https://api.github.com/users/ChristopherHenao/followers')])
    
    
    
      axios.get('https://api.github.com/users/ChristopherHenao')
      .then(res => {
        this.setState({
          user: res.data
        })
      })
      axios.get('https://api.github.com/users/ChristopherHenao/followers')
      .then(res => {
        this.setState({
          userFollowers: res.data
        })
      })
    
  }

  render() {
    console.log('App: Rendered')
    console.log(this.state)
    return (
      <div className="App">
        {/* <UserCard userData={this.state.user}/> */}
        {this.state.user === [] ? <p>Loading Page</p> : <UserCard userData={this.state.user} userFollowers={this.state.userFollowers}/>}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//         App
//     </div>
//   );
// }

export default App;
