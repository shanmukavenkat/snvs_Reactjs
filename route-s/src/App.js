import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from "./components/NotFound"

const App = () => (
  <BrowserRouter>
    <Header />
    {/* The below are the route components and the above are the header components */}
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact component={NotFound}/>
  </Switch>
  
  </BrowserRouter>
)

export default App