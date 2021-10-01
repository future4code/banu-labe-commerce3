import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/sidebar/Sidebar';
import ListaProdutos from './components/Produtos/ListaProdutos';
import Footer from './components/footer/Footer';
import Carrinho from './components/carrinho/Carrinho';
import Filtros from './components/Filtros/filtros';
import EstruturaProduto from './components/Produtos/EstruturaProduto';

const ListaContainer = styled.div`
height: 100vh;
`


class App extends React.Component {

  state = {
    products: [ListaProdutos],
    query: "",
  }

  updateQuery = (e) => {
    this.setState({
       query: e.target.value
    })
 }

  render() {
    return (
      <div>
        <Sidebar />
        <Carrinho />
        <Filtros 
        query={this.state.query}
        updateQuery={this.updateQuery}
        />
        <ListaProdutos />
        <ListaContainer>
        {this.state.products
        .filter(product => {
          return false
        }) 
        }
        </ListaContainer>
        <Footer />
      </div>
    )
  }
}

export default App;
