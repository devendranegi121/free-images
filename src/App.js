import React from 'react';
//import logo from './logo.svg';
import Header from './components/comman/cheader';
import Footer from './components/comman/footer';
import Home from './components/pages/home';
import Search from './components/pages/search';
import Viewimage from './components/pages/viewimage';
import About from './components/pages/about';
import Categories from './components/pages/categories'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
 
  render() {
    //const browserHistory= document.location.history;
    return (
      <div className="App">
        <a className="sr-only sr-only-focusable" href="#content">Skip to main content</a>
        <Header className="navs" brandName="Uttarakhad">
        </Header>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home images='list'></Home>
            </Route>
            <Route path="/search" component={Search} />
            <Route path="/viewimage*" component={Viewimage} />
            <Route path="/about" component={About} />
            <Route path="/categories*" component={Categories} />
          </Switch>
        </Router>
        <div>
        </div>
        <Footer></Footer>
        </div>
    );
  }
}
export default App;
