import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/layouts/Navbar";
import ItemListContainer from "./assets/components/pages/ItemListContainer/ItemListContainer";
import CounterContainer from "./assets/components/common/counter/CounterContainer";
import ItemDetailContainer from "./assets/components/pages/ItemDetail/ItemDetailContainer";

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
            <Route path="*" element={<h2>404 not found</h2>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
