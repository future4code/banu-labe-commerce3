import React from 'react';
import styled from 'styled-components';

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

class Carrinho extends React.Component {
    render(){
    return (
        <DivPrincipal>
            <div>
                <p>Estou aqui e sou o carrinho da Ju, diretamente da cidade da Xuxa!</p>
            </div>
        </DivPrincipal>
    )}
};

export default Carrinho;