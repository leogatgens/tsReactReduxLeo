import React from "react";
import { ContenedorCardsMobile } from "../components/cardcomponent";
import { ContenedorCardsBrowser } from "../components/horizontalcards";
import { BrowserView, MobileView } from "react-device-detect";

class Homebydevice extends React.Component {
  render() {
    return (
      <div>
        <BrowserView>
          <ContenedorCardsBrowser />
        </BrowserView>
        <MobileView>
          <ContenedorCardsMobile />
        </MobileView>
      </div>
    );
  }
}

export default Homebydevice;
