import { BrowserRouter as Router, Route, Routes, Link} from "react-router";
import Home from "./Home/Index"
import Original from "./Original/Index"
import Favoritos from "./Favoritos/Index"
import Informativa from "./Informativa/Index"
import Usuario from "./Usuario/Index"
import Equipo from "./Equipo/Index"
import "./App.css"


function App() {

  return (
    <Router>
      <nav className="c-menu">
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/original">Original</Link>
        <Link to="/informativa">Informativa</Link>
        <Link to="/usuario">Usuario</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favoritos" element={<Favoritos/>} />
        <Route path="/original" element={<Original/>} />
        <Route path="/informativa" element={<Informativa/>} />
        <Route path="/usuario" element={<Usuario/>} />
        <Route path="/equipo/:equipo" element={<Equipo/>} />
      </Routes>
    </Router>
  )
}

export default App
