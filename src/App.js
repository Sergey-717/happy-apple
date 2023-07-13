import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/happy-apple" element={<Posts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
