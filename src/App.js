import React from 'react';
//import styled from 'styled-components';
import Sidebar from './components/sidebar/Sidebar';
import ListaProdutos from './components/Produtos/ListaProdutos';
import Footer from './components/footer/Footer';
import Carrinho from './components/carrinho/Carrinho';


function App() {
  return (
    <div>
      <Sidebar />
      <Carrinho />
      <ListaProdutos /> 
      <Footer />
    </div>
  );
}

export default App;
