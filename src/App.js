import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Produtos from './components/Produtos/Produtos';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Sidebar />
      <Produtos  />
      <Produtos />
      <Produtos />
      <Produtos />
      <Produtos />
      <Footer />
    </div>
  );
}

export default App;
