import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
};

export default App;
