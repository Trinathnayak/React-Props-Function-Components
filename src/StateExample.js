import React  from 'react'

export default class StateExample extends React.Component {
    state={
        name:"Trinath",
        age:19
    }
  render() {
    return (
      <div>
        StateExample
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        </div>
   )
  }
}
