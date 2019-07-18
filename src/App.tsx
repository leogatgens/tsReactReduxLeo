import React from "react";
import MainFrame from "./views/game/container/MainFrame";
import { BrowserRouter, Route, Switch} from "react-router-dom";
//import Header from "./shared/component/Header";
import Header from "./shared/component/Header3";
import Homebydevice from "./views/youtrip/home/scenes/homebydevice"
import TripsContainer from "./views/youtrip/tovisit/services/tripsContainer"
import MyTripsContainer from "./views/youtrip/mytrips/services/MyTripsContainer";
interface AppProps {
  history: any;
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



const App = (props: AppProps) => {
  
  const path = (/#!(\/.*)$/.exec(props.history.location.hash) || [])[1];
if (path) {
  props.history.replace(path);
}
  
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
        <Route exact path="/" component={Homebydevice} ></Route>
        <Route path="/about" component={About} ></Route>
        <Route path="/contact" component={Contact} ></Route>
        <Route path="/game" component={MainFrame} ></Route>
        <Route path="/profile" component={ProfileForm} ></Route>
        <Route path="/porvisitar" component={TripsContainer} ></Route>
        <Route path="/misviajes" component={MyTripsContainer} ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
