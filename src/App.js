import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/HomePage/Home/Home';
import AboutPage from './Components/AboutPage/AboutPage';
import Project from './Components/Project/Project';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <AboutPage></AboutPage>
        </Route>
        <Route path="/project">
          <Project></Project>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
