import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop"

// Screens
import HomeScreen from "./screens/HomeScreen"
import TaskScreen from "./screens/TaskScreen"
import { useState } from "react";
import TaskItemsScreen from "./screens/TaskItemsScreen";


function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}  />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <main className="app">
        <Route exact path="/task" component={TaskItemsScreen} />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/taskmanager" component={TaskScreen} />
        </Switch>
      </main>
      <Footer />

    </Router>
  );
}

export default App;
