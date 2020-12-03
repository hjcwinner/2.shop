import React from 'react';
import { useHistory, useParams } from 'react-router-dom'

const Detail = ({shoes}) => {

    let {id} = useParams()
    let findid = shoes.find(function(findgood){
        return findgood.id == id
    })

    let history = useHistory()

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${findid.id+1}.jpg`} width="100%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{findid.title}</h4>
                    <p>{findid.content}</p>
                    <p>{findid.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-danger" onClick={ () => {
                        history.goBack()
                    }}>뒤로가기</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;