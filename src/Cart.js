import React from 'react';
import {Table} from 'react-bootstrap'
import { connect } from 'react-redux';

const Cart = (props) => {
    return (
        <div>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>상품ID</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>수량변경</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.state.map((pro, i)=> {
                        return (
                        <tr key={i}>
                            <td>{pro.id}</td>
                            <td>{pro.name}</td>
                            <td>{pro.quan}</td>
                            <td><button onClick={() => { 
                                    props.dispatch({ type : 'plus'})}}>+</button>
                                <button onClick={ () => {
                                    props.dispatch( { type : 'minus'})}}>-</button></td>     
                        </tr>
                        )
                    })
                }      
                </tbody>
            </Table>
        </div>
    );
};

const product = state => ({
    state : state
})


export default connect(
    product
)(Cart);