import React from 'react';
import styled from 'styled-components';

const DivPrincipal = styled.div`
    width: 100vw;
    height: 30vh;
    display: flex;
    background-color: #000000;
    color: #ffffff;
`
class Footer extends React.Component {
    render(){
    return (
        <DivPrincipal>
                <h2>ASTROCOMMERCE</h2>  
        </DivPrincipal>
    )}
};

export default Footer; 