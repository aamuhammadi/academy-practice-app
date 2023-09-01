import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import Layout from "./Components/Layout/Index";
import ItemDetailPage from "./Components/Store/ItemDetailPage";
import Items from "./Components/Store/Items";
import ToDoListApp from "./Components/ToDoListApp";
import BarberShop from "./Components/barberShopCode";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/items" element={<Items />} />
          <Route path="/barbershop" element={<BarberShop />} />

          <Route path="/todolistapp" element={<ToDoListApp />} />

          <Route path="/items/:id" element={<ItemDetailPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
