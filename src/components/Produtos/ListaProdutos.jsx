import React from 'react';
import styled from 'styled-components';
import EstruturaProduto from './EstruturaProduto';
import camisa1 from '../img/camiseta-astronauta.jpeg';
import camisa2 from '../img/camiseta-planeta.jpeg';
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
                id={1} 
                img={camisa1}
                produto={'Camiseta astronauta'}
                preço={'R$1.500,00'}
            />
            <EstruturaProduto  
                id={2}
                img={camisa2}
                produto={'Camiseta planeta'}
                preço={'R$2.500,00'}
            />
            <EstruturaProduto  
                id={3}
                img={camisa3}
                produto={'Moletom planetas'}
                preço={'R$3.500,00'}
            />
            <EstruturaProduto  
                id={4}
                img={camisa4}
                produto={'Camiseta Up Altas Aventuras'}
                preço={'R$4.500,00'}
            />
            <EstruturaProduto  
                id={5}
                img={camisa5}
                produto={'Moletom planeta'}
                preço={'R$5.500,00'}
            />
            <EstruturaProduto  
                id={6}
                img={camisa6}
                produto={'Meia NASA'}
                preço={'R$6.500,00'}
            />
            <EstruturaProduto  
                id={7}
                img={camisa7}
                produto={'Camiseta ET'}
                preço={'R$7.500,00'}
            />
            <EstruturaProduto  
                id={8}
                img={camisa8}
                produto={'Moletom Spce Bulgariasat-1'}
                preço={'R$8.500,00'}
            />
            <EstruturaProduto  
                id={9}
                img={camisa9}
                produto={'Meia ET'}
                preço={'R$1.500,00'}
            />
            <EstruturaProduto  
                id={10}
                img={camisa10}
                produto={'Camiseta foguete'}
                preço={'R$1.500,00'}
            />
        </DivContainer>
        )}
};

export default ListaProdutos; 
