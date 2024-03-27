import './App.css';
import SignIn from './auth/SignIn';
import ProductForm from './auth/ProductForm';
import ProductDelete from './auth/ProductDelete';
import Displayproduct from './auth/Displayproduct';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';
function App() {
  return (<>
    <Router>
      
      <div className="App">
        <SignIn />
        <h1>Product List</h1>
        <Link to="/Displayproduct">Displayproduct</Link>
        <Routes>
        <Route path='/Displayproduct' element={<Displayproduct/>}/>
        <Route path="/product/:id" component={ProductDetails} />
        </Routes>
        <h2>Add Product</h2>
        <ProductForm />
        <h2>Delete Product</h2>
        <ProductDelete id={1} />
      </div>
    </Router>
    

    </>

  );
}

export default App;