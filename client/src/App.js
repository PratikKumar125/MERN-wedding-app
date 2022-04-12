import logo from './logo.svg';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AOS from "aos";
import Home from "./components/home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Blogs from "./components/Blogs"
import Blogwriting from "./components/blogwriting"
AOS.init();
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/loginsuccess" component = {Blogs}/>
          <Route exact path = "/login" component = {Login}/>
          <Route exact path = "/signup" component = {Signup}/>
          {/* <Route exact path = "/blogs" component = {Blogs}/> */}
          <Route exact path = "/blogwriting" component = {Blogwriting}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
