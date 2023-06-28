import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/homes/Home"
import List from "./Pages/list/List";
import Hotel from "./Pages/hotel/Hotel";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hotel" element={<List />}></Route>
          <Route path="/hotel/:id" element={<Hotel />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
