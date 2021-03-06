import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import './Detail.scss';
import { Nav } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'
import {connect} from 'react-redux'

const Madetail = styled.div`
    padding : 20px;
    height : 140px;
`;

const Matext = styled.h4`
    font-size : 25px;
`;

const Curently = styled.div`
    font-size : 15px;
    position : absolute;
    width: 100px;
    top: 85px; 
    right: 30px;
`;

const Curentlyp = styled.p`
    font-size : 15px;
    margin-bottom : 5px;
    color : blue;
`;


const Detail = (props) => {

    const [alter, setAlter] = useState(true)
    let [tab, setTab] = useState(0)
    let [actab, setActab] = useState(false)

    let {id} = useParams()
    let findid = props.shoes.find(shoe => shoe.id == id)

    let history = useHistory()

    useEffect(() => {  
        var cuntly = localStorage.getItem('current')
        if( cuntly == null) {
            cuntly = []
            cuntly.push(id)
        }
        else { cuntly = JSON.parse(cuntly) }
        cuntly.push(id)

        if(cuntly.length > 2) {
            cuntly = cuntly.slice(1)
        }
        localStorage.setItem('current', JSON.stringify(cuntly))
    },[])

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlter(false)
            return () => { clearTimeout(timer) }
        }, 2000);
    }, [alter])

    var imgresult = localStorage.getItem('current')
    imgresult = JSON.parse(imgresult)
    if(imgresult){var image = imgresult[0]}
    
    return (
        <div className="container">
            <Madetail className="red">
                <Matext>Detail</Matext>
                <Curently>
                    <Curentlyp>최근본상품</Curentlyp>
                    <img src={`https://codingapple1.github.io/shop/shoes${image-1}.jpg`} width="100%"/>     
                </Curently>
            </Madetail>
            {
                alter
                ? (<div className="my-alert">재고가 얼마 남지 않았습니다</div>)
                : null
             }
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${findid.id-1}.jpg`} width="100%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{findid.title}</h4>
                    <p>{findid.content}</p>
                    <p>{findid.price}</p>
                    <button className="btn btn-danger"
                        onClick={ () => {
                            props.dispatch({type : 'productAdd', payload : {id:findid.id, name:findid.title, quan:1}});
                            history.push('/cart')
                        }}
                    >주문하기</button>
                    <button className="btn btn-danger" onClick={ () => {
                        history.goBack()
                    }}>뒤로가기</button>
                </div>
            </div>

            <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={ () => {
                        setTab(0); setActab(false)
                    }}>상품설명</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={ () => {
                        setTab(1); setActab(false)
                    }}>배송정보</Nav.Link>
                </Nav.Item>
            </Nav>
            <CSSTransition in={actab} classNames="light" timeout={500}>
                <Tabinfo tab={tab} setActab={setActab}/>
            </CSSTransition>       
        </div>
    );
};

function Tabinfo({tab, setActab}){

    useEffect(() => {
        setActab(true)
    })

    if(tab === 0) {
        return <div>1번 탭입니다</div>
    }
    else if(tab === 1) {
        return <div>2번 탭입니다</div>
    }
    else if(tab === 2) {
        return <div>3번 탭입니다</div>
    }
}

const product = state => ({
    state : state
})

export default connect(
    product
)(Detail);