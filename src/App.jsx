import About from "./components/About"
import Blogs from "./components/Blogs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navigation from "./components/Navigation"
import Portfolio from "./components/Portfolio"
import Service from "./components/Service"

function App() {

  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Portfolio />
      <Service />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
