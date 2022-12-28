import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import SPAPage from "./pages/SPAPage";
import Home2 from "./pages/Home2";
import {useEffect} from "react";

function App() {
    const history = useHistory();
    useEffect(() => {
        history.listen(action => {
            // track page
        });
    }, []);
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/HOME2" element={<Home2/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
