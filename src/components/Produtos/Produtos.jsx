import React from 'react';
import styled from 'styled-components';

const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    align-items: center;
`;

class  Produtos extends React.Component {
    render(){
    return (
        <DivPrincipal>
            <img src="" alt="" />
            <p>Nome do Produto</p>
            <p>R$1.000,00</p> 
            <button>adicionar produto</button>
        </DivPrincipal>
    )}
};

export default Produtos; 

