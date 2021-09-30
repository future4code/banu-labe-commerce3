import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Carrinho from '../../img/carrinho.png'

class  Sidebar extends React.Component {

    render(){
    return (
        <DivPrincipal>
            <div>
                <img src={Carrinho} alt="imagem carrinho" />
            </div>
            <Footer />
        </DivPrincipal>
    )}
};

export default Sidebar; 
      
