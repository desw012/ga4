import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

import Home2 from "./pages/Home2";
import SPAPage from "./pages/SPAPage";


function App() {

  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/HOME2" element={<Home2/>}/>
            <Route path="/spa" element={<SPAPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
