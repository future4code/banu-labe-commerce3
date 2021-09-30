import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';

class  Sidebar extends React.Component {

    
    render(){
    return (
        <DivPrincipal>
            <Sidebar />  
            <div>
                <p>Estou aqui e sou o  carrinho</p>
            </div>
            <Footer />
        </DivPrincipal>
    )}
};

export default Sidebar; 
      
