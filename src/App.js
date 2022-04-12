import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';

import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
