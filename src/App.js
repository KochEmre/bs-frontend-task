import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Page404 from "./pages/404Page";
import AboutPage from "./pages/aboutPage";
import HomePage from "./pages/homePage";
import WorkPage from "./pages/workPage";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/work" element={<WorkPage/>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer/>
    </div>

  );
};

export default App;
