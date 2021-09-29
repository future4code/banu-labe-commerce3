import React from 'react';
import styled from 'styled-components';

const DivPrincipal = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

const DivInicial = styled.div`
    display: flex;
    background-color: #ff0000;
    justify-content: center;
    color: #ffff;
    font-size: 12px;
    padding: 0.5em;
`;

const DivSecundaria = styled.div`
    display: flex; 
    justify-content: space-around;
    padding: 0.5em;
    align-items: center;

`;

const ListaSidebar = styled.ol`
    display: flex;
    justify-content: space-around;
    width: 50vw;
    list-style-type: none;
`;

class  Sidebar extends React.Component {
    render(){
    return (
        <DivPrincipal>
            <DivInicial>
                <h1>20% off para LabAlunos!</h1>
            </DivInicial>
            <DivSecundaria>  
                <h2>ASTROCOMMERCE</h2>
                <ListaSidebar>
                    <li> CAMISETAS</li>
                    <li> MOLETONS</li>
                    <li> MEIAS</li>
                </ListaSidebar>
                <h2>IMG</h2>
                <select name="" id="">
                    <option value="menor preço">menor preço</option>
                    <option value="maior preço">maior preço</option>
                </select>
            </DivSecundaria>
            
        </DivPrincipal>
    )}
};

export default Sidebar; 


