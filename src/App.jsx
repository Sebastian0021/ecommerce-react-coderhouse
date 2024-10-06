import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/layouts/Navbar";
import ItemListContainer from "./assets/components/pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./assets/components/pages/ItemDetail/ItemDetailContainer";
import CartContainer from "./assets/components/pages/cart/CartContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="p-5">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="category/:category" element={<ItemListContainer />} />
            <Route path="/vape/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="*" element={<h2>404 not found</h2>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
