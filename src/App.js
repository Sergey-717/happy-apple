import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListOfCards from "./components/ListOfCards";
import Main from "./components/Main";
import Content from "./components/Content";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/happy-apple" element={<Content />}></Route>
          {/* <Route path="/happy-apple/products" element={}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
