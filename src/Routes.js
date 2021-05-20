import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import Dictaphone from "./Dictaphone";
import Bongo from "./Bongo";
import Navigator from "./Navigator";

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/google-maps" exact component={App} />
          <Route path="/bongo-cat" exact component={Bongo} />
          <Route path="/speech-to-text" exact component={Dictaphone} />
          <Route path="/" exact component={Navigator} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
