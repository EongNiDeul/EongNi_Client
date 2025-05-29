// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import WritePage from "./pages/WritePage.jsx";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

const Main = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/WritePage" element={<WritePage />} />
      </Routes>
    </div>
  );
};

export default App;
