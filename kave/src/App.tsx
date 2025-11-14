import { BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <h1>Kávés oldal</h1>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App