import "../../css/App.css"

import Navbar from "./Navbar"
import About from "./About"
import Landing from "./Landing"
import Skills from "./Skills"
import Footer from "./Footer"



function App() {
  return (
    <>
      <div>
        <Navbar/>
        <main>
          <Landing/>
          <div className="InfoContainters">
            <About/>
            <Skills/>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
