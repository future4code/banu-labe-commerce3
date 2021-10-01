import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    margin: 40px;
`

export default function Filters(props) {
    return <FiltersContainer>
       <input
          placeholder="Pesquisa"
          value={props.query}
          onChange={props.updateQuery}
          />    
    </FiltersContainer>
}