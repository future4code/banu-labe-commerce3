import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    margin: 40px;
`

const OpcoesSort = styled.select`
width: auto;
padding: 2px;
`

const OpcoesOrder = styled.select`
width: auto;
padding: 2px;
`

export default function Filters(props) {
    return <FiltersContainer>
       <input
          placeholder="Pesquisa"
          value={props.query}
          onChange={props.updateQuery}
          />    

          <input
         type="number"
         placeholder="Preço mínimo"
         value={props.minPrice}
         onChange={props.updateMinPrice}
        />

        <input
         type="number"
         placeholder="Preço máximo"
         value={props.maxPrice}
         onChange={props.updateMaxPrice}
        />
        
         <OpcoesSort
            name="sort"
            value={props.sortingParameter}
            onChange={props.updateSortingParameter}
         >
            <option value="title">Título</option>
            <option value="price">Preço</option>
         </OpcoesSort>

         <OpcoesOrder
            name="sort"
            value={props.order}
            onChange={props.updateOrder}
         >
            <option value="asc">Crescente</option>
            <option value="desc">Decrescente</option>
         </OpcoesOrder>
    </FiltersContainer>
}