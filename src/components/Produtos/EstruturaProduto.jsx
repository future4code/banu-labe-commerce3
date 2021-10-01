import React from 'react';
import styled from 'styled-components';

const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    align-items: center;
img {
    width: 15vw;
    height: 15vh;
    padding: 1.5em;
}`;

class EstruturaProduto extends React.Component {
    render(){
    return (
        <DivPrincipal>
            <img src={this.props.img} alt="" />
            <p>{this.props.produto}</p>
            <p>{this.props.preço}</p> 
            <button>adicionar produto</button>
        </DivPrincipal>
    )}
};

export default EstruturaProduto; 

