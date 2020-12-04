import React from 'react';
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import './Detail.scss';

const Madetail = styled.div`
    padding : 20px
`;

const Matext = styled.h4`
    font-size : 25px;
`;

const Detail = ({shoes}) => {

    let {id} = useParams()
    let findid = shoes.find(shoe => shoe.id == id)

    let history = useHistory()

    return (
        <div className="container">
            <Madetail className="red">
                <Matext>Detail</Matext>
            </Madetail>
            <div className="my-alert">재고가 얼마 남지 않았습니다</div>
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