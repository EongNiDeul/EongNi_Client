// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import StartPage from "./pages/StartPage";
import SignupPage from "./pages/SignupPage";
import PostPage from "./pages/PostPage";

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
        <Route path="/" element={<StartPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        {/* <Route path="/StartPage" element={<StartPage />} /> */}
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/PostPage" element={<PostPage />} />
      </Routes>
    </div>
  );
};

export default App;
