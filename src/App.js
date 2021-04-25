import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// Screens
import HomeScreen from "./screens/HomeScreen"
import TaskScreen from "./screens/TaskScreen"


function App() {
  return (
    <Router>
      <Navbar />

      <main className="app">
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
