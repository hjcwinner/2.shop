import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {stockContext} from './App'
import styled from 'styled-components'

const Image = styled.img`
    transition: opacity 0.1s linear;
`;

const Hov = styled.div`
    &:hover {
        ${Image} {
            opacity: 0.5;
        }
    }
`;

const Shoespage = ({shoesone, i}) => {

    let stock = useContext(stockContext)
    let history = useHistory()

    return (
        <Hov className="col-md-4" onClick={ () => {history.push('/detail/' + shoesone.id)}}>
            <Image src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="100%"/>
            <h4>{shoesone.title}</h4>
            <p>{shoesone.content} & {shoesone.price}</p>
            <p>재고 : {stock[i]}</p>
        </Hov>
    );
};

export default Shoespage;