import React from "react"
class PropsExample extends React.Component{
	render(){
		console.log(this.Props)
		return(
			<div>
				<h1>About PropsExample</h1>
				<p>Name:{this .props .name}</p>
				<p>age:{this.props.age}</p>
			</div>
		)
	}
}
export default PropsExample