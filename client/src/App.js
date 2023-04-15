import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./components/Join";
import Chat from "./components/Chat";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" Component={Join} />
      <Route path="/chat" Component={Chat} />
    </Routes>
  </Router>
);
export default App;
