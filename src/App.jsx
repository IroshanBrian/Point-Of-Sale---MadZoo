import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Products from './components/pages/Products';
import Sales from './components/pages/Sales';
import Home from './components/pages/Home';

function App() {
     return (
          <Router>
               <div className="container mx-auto">
                    <NavBar />
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/products" element={<Products />} />
                         <Route path="/sales" element={<Sales />} />
                    </Routes>
               </div>
          </Router>
     );
}

export default App;
