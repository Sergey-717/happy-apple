import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListOfCards from "./components/ListOfCards";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/happy-apple" element={<ListOfCards />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
