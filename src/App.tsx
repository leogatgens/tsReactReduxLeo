import React from "react";

import MainFrame from "./views/game/container/MainFrame";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { History } from "history";
import Header from "./shared/component/Header";
interface AppProps {
  history: History;
}

const About = () =>{
  return (
    <div>
      <p>About es una pagina para mostrar cosas</p>
    </div>
  )
}

const Contact = () =>{
  return (
    <div>
      <p>Contact es una pagina para mostrar cosas</p>
    </div>
  )
}


const App = ({ history }: AppProps) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={MainFrame} ></Route>
        <Route path="/about" component={About} ></Route>
        <Route path="/contact" component={Contact} ></Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
