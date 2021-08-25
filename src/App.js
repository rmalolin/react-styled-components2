import React from "react";
import GlobalStyles from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
