import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from './components/sidebar/Sidebar';
// import ListaProdutos from './components/Produtos/ListaProdutos';
import Footer from './components/footer/Footer';
import Carrinho from './components/carrinho/Carrinho';
import Filtros from './components/Filtros/filtros';
// import EstruturaProduto from './components/Produtos/EstruturaProduto';
import productsList from './data/ProductsList'
import { Card } from './components/Card/Card.jsx';

// const ListaContainer = styled.div`
// height: 100vh;
// `

const ListaContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap:wrap;
   *{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }
`

class App extends Component {
  state = {
    products: productsList,
    query: "",
    minPrice: "",
    maxPrice: "", 
    sortingParameter: "title",
    order: 1
  }

  updateQuery = (e) => {
    this.setState({
       query: e.target.value
    })
 }

 updateMinPrice = (ev) => {
  this.setState({
     minPrice: ev.target.value
  })
}

updateMaxPrice = (ev) => {
  this.setState({
     maxPrice: ev.target.value
  })
}

updateSortingParameter= (e) => {
  this.setState({
    sortingParameter: e .target.value
  })
}

updateOrder= (e) => {
  this.setState({
    order: e .target.value
  })
}

  render() {
    return <>
      <div>
        <Sidebar />
        <Carrinho />
        <Filtros 
        query={this.state.query}
        updateQuery={this.updateQuery}
        updateMinPrice={this.updateMinPrice}
        updateMaxPrice={this.updateMaxPrice}
        updateSortingParameter={this.updateSortingParameter}
        updateOrder={this.updateOrder}
        minPrice={this.state.minPrice}
        maxPrice={this.state.maxPrice}
        sortingParameter={this.state.sortingParameter}
        order={this.state.order}
        />

        <ListaContainer>
          {this.state.products
          .filter(product => {
            return product.title.toLowerCase().includes(this.state.query.toLowerCase())
          })
          .filter(product => {
            return this.state.minPrice === "" || product.price >= this.state.minPrice
          })
          .filter(product => {
            return this.state.maxPrice === "" || product.price <= this.state.maxPrice
          })
          .sort((currentProduct, nextProduct) => {
            switch (this.state.sortingParameter) {
              case "title":
                return this.state.order * currentProduct.title.localeCompare(nextProduct.title)
            default:
              return this.state.order * (currentProduct.price - nextProduct.price)
            }
          })
          .map(product => { 
          return <Card key={product.id} product={product} />
        })}
        </ListaContainer>
        <Footer />
      </div>
    </>
  }
}

export default App;
