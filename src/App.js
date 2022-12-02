import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<></>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
