import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Products from './components/Products'

import { Link, Route, Switch} from 'react-router-dom' 

function App() {
  return (
    <div>
      {/* Para version 6 o posteriores de react-router-dom */}
 
      {/* <nav>
        <Link to={{ pathname: "/" }}>Home</Link>
        <Link to={{ pathname: "/about" }}>About</Link>
        <Link to={{ pathname: "/contact" }}>Contact</Link>
      </nav> */}
      
      {/* <Routes> Routes reemplaza a Switch de la versiones anteriores
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}

      <nav>
        <Link to="/">Home</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/contact">Contact</Link><br/>
        <Link to="/products/1">Products</Link><br/>
        <Link to="/no-existe">No existe</Link><br/>
      </nav>

      <hr/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" >
          <About/>
        </Route>
        <Route path="/contact" component={Contact}/>
        <Route exact path="/products/:id" component={Products}/>
        <Route component={NotFound}/>
      </Switch>

    </div>
  )
}

export default App;
