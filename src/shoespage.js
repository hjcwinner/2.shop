import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {stockContext} from './App'

const Shoespage = ({shoesone, i}) => {

    let stock = useContext(stockContext)
    let history = useHistory()

    return (
        <div className="col-md-4" onClick={ () => {history.push('/detail/' + shoesone.id)}}>
            <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="100%"/>
            <h4>{shoesone.title}</h4>
            <p>{shoesone.content} & {shoesone.price}</p>
            <p>재고 : {stock[i]}</p>
        </div>
    );
};

export default Shoespage;