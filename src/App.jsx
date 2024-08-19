import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import SaleList from './components/SaleList';
import SaleForm from './components/SaleForm';
import UserLogin from './components/UserLogin';

function App() {
     return (
          <Router>
               <div className="App">
                    <nav className="bg-gray-800 text-white p-4">
                         <ul className="flex space-x-4">
                              <li><a href="/" className="hover:underline">Home</a></li>
                              <li><a href="/products" className="hover:underline">Products</a></li>
                              <li><a href="/sales" className="hover:underline">Sales</a></li>
                              <li><a href="/login" className="hover:underline">Login</a></li>
                         </ul>
                    </nav>
                    <Routes>
                         <Route path="/" element={<div className="p-4 text-center"><h1 className="text-4xl font-bold">Welcome to the POS System</h1></div>} />
                         <Route path="/products" element={<ProductList />} />
                         <Route path="/add-product" element={<ProductForm />} />
                         <Route path="/sales" element={<SaleList />} />
                         <Route path="/add-sale" element={<SaleForm />} />
                         <Route path="/login" element={<UserLogin />} />
                    </Routes>
               </div>
          </Router>
     );
}

export default App;
