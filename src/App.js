import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import SPAPage from "./pages/SPAPage";

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/spa" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
