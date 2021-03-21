import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Login from "./Login";
import Dashboard from "./Dashboard";
const code = new URLSearchParams(window.location.search).get("code");

const App = () => {
  return code ? <Dashboard code={code} /> : <Login />;
};

export default App;
