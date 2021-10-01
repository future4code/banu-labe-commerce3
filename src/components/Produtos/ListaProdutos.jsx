import React from 'react';
import styled from 'styled-components';
import EstruturaProduto from './EstruturaProduto';
import camisa1 from '../img/camiseta-astronauta.jpeg';
import camisa2 from '../img/camiseta-astronauta.jpeg';
import camisa3 from '../img/moletom-planetas.jpeg';
import camisa4 from '../img/camiseta-up.jpeg';
import camisa5 from '../img/moletom-branco-planeta.webp';
import camisa6 from '../img/meia-nasa.jpeg';
import camisa7 from '../img/camiseta-et.webp';
import camisa8 from '../img/moletom.jpg';
import camisa9 from '../img/meia-et.jpeg';
import camisa10 from '../img/camisetafoguete3.jpg';


const DivContainer = styled.div `
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
`;


class ListaProdutos extends React.Component {
    render(){
    return (
        <DivContainer>
            <EstruturaProduto 
                img={camisa1}
                produto={'Camiseta astronauta'}
                preço={'R$1.500,00'}
            />
            <EstruturaProduto  
                img={camisa2}
                produto={'Camiseta ET'}
                preço={'R$2.500,00'}
            />
            <EstruturaProduto  
                img={camisa3}
                produto={'Camiseta astronauta'}
                preço={'R$3.500,00'}
            />
            <EstruturaProduto  
                img={camisa4}
                produto={'Camiseta astronauta'}
                preço={'R$4.500,00'}
            />
            <EstruturaProduto  
                img={camisa5}
                produto={'Camiseta astronauta'}
                preço={'R$5.500,00'}
            />
            <EstruturaProduto  
                img={camisa6}
                produto={'Camiseta astronauta'}
                preço={'R$6.500,00'}
            />
            <EstruturaProduto  
                img={camisa7}
                produto={'Camiseta astronauta'}
                preço={'R$7.500,00'}
            />
            <EstruturaProduto  
                img={camisa8}
                produto={'Camiseta astronauta'}
                preço={'R$8.500,00'}
            />
            <EstruturaProduto  
                img={camisa9}
                produto={'Camiseta astronauta'}
                preço={'R$1.500,00'}
            />
            <EstruturaProduto  
                img={camisa10}
                produto={'Camiseta astronauta'}
                preço={'R$1.500,00'}
            />
        </DivContainer>
    )}
};

export default ListaProdutos; 
