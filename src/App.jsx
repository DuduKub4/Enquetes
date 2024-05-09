import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Rotas from "./config/routes";


function App(){
  return (
    <>
      <Header></Header>
      <main>
        <Rotas></Rotas>
      </main>
      <Footer></Footer>
    </>
  );
}


export default App; 