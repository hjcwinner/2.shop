import React from 'react';

const shoespage = ({shoesone, i}) => {
    return (
        <div className="col-md-4">
            <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="100%"/>
            <h4>{shoesone.title}</h4>
            <p>{shoesone.content} & {shoesone.price}</p>
        </div>
    );
};

export default shoespage;