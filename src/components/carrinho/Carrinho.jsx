import React from 'react';
import styled from 'styled-components';
import Car from '../img/carrinho.png'

const DivPrincipal = styled.div `
height: 100vh;
display: flex;
flex-direction: row-reverse;
/* border: solid 1px blue; */
justify-content: center;
float: right;
margin-right: 10px;
margin-top: 20px;
padding: 10px;
width: 300px;
`;

const ImagemCarrinho = styled.img`
width: 26px;
height: 26px;
margin-right: 10px;
`
const CarrinhoDeCompras = styled.span`
font-size: 20px;
`


class Carrinho extends React.Component {
    render(){
    return (
        <DivPrincipal>
            <div>
                <ImagemCarrinho src={Car} />
                <CarrinhoDeCompras>Carrinho de compras </CarrinhoDeCompras>
            </div>
        </DivPrincipal>
    )}
};

export default Carrinho;