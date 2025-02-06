import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    lastname: '',
  }

  onSubmitName = event => {
    event.preventDefault()
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onLastname = event => {
    this.setState({lastname: event.target.value})
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username">USER NAME</label>
        <input
          type="text"
          id="username"
          placeholder="username"
          value={username}
          onChange={this.onUsername}
        />
      </>
    )
  }

  renderLastname = () => {
    const {lastname} = this.state
    return (
      <>
        <label htmlFor="lastname">LAST NAME</label>
        <input
          type="text"
          id="lastname"
          placeholder="lastname"
          value={lastname}
          onChange={this.onLastname}
        />
      </>
    )
  }

  render() {
    return (
      <>
        <div>
          <div className="container">
            <h1>Registration</h1>
            <form onSubmit={this.onSubmitName}>
              <div>{this.renderUsername()}</div>
              <div>{this.renderLastname()}</div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default Login
