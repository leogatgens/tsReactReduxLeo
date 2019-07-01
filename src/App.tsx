import React from "react";
import MainFrame from "./views/game/container/MainFrame";
import { BrowserRouter, Route } from "react-router-dom";
import { History } from "history";
import Header from "./shared/component/Header";
import Homebydevice from "./views/youtrip/home/scenes/homebydevice"
import TripsContainer from "./views/youtrip/tovisit/services/tripsContainer"
import MyTripsContainer from "./views/youtrip/mytrips/services/MyTripsContainer";
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

const ProfileForm = () =>{
  return (
    <div>
      <p>Formulario para datos del usuario</p>
    </div>
  )
}



const App = ({ history }: AppProps) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Homebydevice} ></Route>
        <Route path="/about" component={About} ></Route>
        <Route path="/contact" component={Contact} ></Route>
        <Route path="/game" component={MainFrame} ></Route>
        <Route path="/profile" component={ProfileForm} ></Route>
        <Route path="/porvisitar" component={TripsContainer} ></Route>
        <Route path="/misviajes" component={MyTripsContainer} ></Route>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
