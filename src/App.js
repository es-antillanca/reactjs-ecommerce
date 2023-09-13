// import { useState, useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail"
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NextUIProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <main className="py-12 md:py-10 px-5 md:px-36 space-y-8">
                <ItemListContainer greeting="Bienvenidos a eCommerce" />
              </main>
            }
          />
          <Route path="/item/:productId" element={<ItemDetail />} />
          <Route path="/category/:id" element={<ItemListContainer greeting="Explora la categoría "/>} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>

        <Toaster />
      </NextUIProvider>
    </BrowserRouter>
  );
}

export default App;
