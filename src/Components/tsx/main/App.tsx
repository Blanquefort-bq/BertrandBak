import "../../css/App.css"

import Navbar from "./Navbar"
import About from "./About"
import Landing from "./Landing"
import Skills from "./Skills"
import Footer from "./Footer"
import Start from "./Start"


function App() {
  return (
    <>
      <div>
        <Navbar/>
        <main>
          <Landing/>
          <div className="Container">
            <About/>
            <Skills/> 
          </div>
          <Start/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
