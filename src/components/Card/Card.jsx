import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
   margin: 5px;
   padding: 0 15px;
   border-radius: 5px;
   width: 250px;
`

const CardPrice = styled.h4`
   display: flex;
   justify-content: space-between;
   `

const CardImage = styled.img`
    width: 15vw;
    height: 26vh;
    padding: 1.5em;
`
const CardContent = styled.p`
   padding: 15px 0;
`

const CardBotao = styled.button `
    margin: 1.5em;
    margin-bottom: 4em;
    &:hover {
        cursor: pointer;
    }
`

export function Card(props) {
    return <CardContainer>
        <CardImage src={props.product.image} />
        <CardContent>
       <h2 title={props.product.title}>
          {props.product.title}
       </h2>
       </CardContent>
       <CardPrice>
          <span>R$ {props.product.price}</span>
       </CardPrice>
       <CardBotao onClick={props.product.adicionarProdutoCarrinho}>
          Adicionar ao carrinho
        </CardBotao>
    </CardContainer>
}

