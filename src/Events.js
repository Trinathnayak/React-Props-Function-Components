import React from 'react'

export default class Events extends React.Component {
  state={
    username:""
  }
  handleClick=()=>{
        alert("from button")
  }
  handleUser=(e)=>{
    this.setState({
      [e.target.name]:e.target.value   
    })
  }
  render() {
    console.log(this.state.username)
    return (
      <div>
      <input type="text"
      placeholder="Enter anything"
      name="username"
      onChange={this.handleUser}>
        </input>
      <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}
