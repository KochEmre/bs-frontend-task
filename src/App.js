import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Page404 from "./pages/404Page";
import AboutPage from "./pages/aboutPage";
import HomePage from "./pages/homePage";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>

  );
};

export default App;
