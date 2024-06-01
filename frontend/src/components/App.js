import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Header from "./header";
import Dashboard from "./dashboard";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard user={user} setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
