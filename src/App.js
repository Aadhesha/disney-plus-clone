import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Details from "./Components/Details";
import { useSelector } from "react-redux";
import { selectUserName } from "./Features/User/userSlice";

function App() {
  const username = useSelector(selectUserName);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          {username ? (
            <Route exact path="/home" element={<Home />}></Route>
          ) : (
            <></>
          )}
          <Route exact path="/detail/:id" element={<Details />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
