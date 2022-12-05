import React from "react"
function About()
{
    /*return(
        <div>About page</div>
    )*/
    
    return React.createElement("div",
    {id:"App",classname:"Appclass"},
    React.createElement("h1",null,"About page"))
}
export default About