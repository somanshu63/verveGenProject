import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Header from "./header";
import Dashboard from "./dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
