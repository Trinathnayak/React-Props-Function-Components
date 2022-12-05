/*import ClassComponent from "./ClassComponent"
import ClassComponent1 from "./ClassComponent1"
function App(){
  return(
    <section>
      <p>code red</p>
      <h1>Nee yabba code red raa code red</h1>
      <p>This is ClassComponent</p>
      <ClassComponent/>
      <ClassComponent1/>
    </section>
  )
}
export default App*/

/*import PropsExample from "./PropsExample"
function App(){
  return(
    <div>
    <h1>This is about prop example</h1>
    <PropsExample name="Trinath nayak" age="19"/>
    </div>
    )
}
export default App*/

// import ClassComponent2 from "./ClassComponent2"
// import StateExample from "./StateExample"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import  Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Navbar from "./Components/Navbar"
import NotFound from "./Components/NotFound"

function App(){
return(
  <section>
    <h1>naku ami tealudu sir </h1>
    <h1>a 5 hatyalu neana chasanu</h1>
    <h2>Hey nandi are you crazy</h2>
    <h3>anduku ani naynam ayena vastuvalunu tayaru chayadam leadu</h3>
    <h4>Vadeki niku antra sambandam</h4>
    <h5>Kathi ki bochu ki vunna sambandam</h5>
    <h6>Veedu avadra ela vunadu</h6>
    <h6>Arey veedu naku baga tealusura pelli lalo angeli akulu aruku tentadu</h6>
    {/* <ClassComponent2/>
    <StateExample/> 
    <Events/> */}
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter> 

    </section>
)
}
export default App






