import React, {useState} from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import Shoespage from '../Shoespage'
import axios from 'axios'


const Junbocard = ({shoes}) => {

    let [newshoes, setNewshoes] = useState(shoes)

    return (
        <div>
            <Jumbotron className="background">
                <h1>50% Sale</h1>
                <p>These are the safest and longest-lasting shoes in the world. It boasts the best features..</p>
                <p>Highly recommend to buy now</p>
            </Jumbotron>
            <div className="container">
                <div className="row">
                {newshoes.map((shoe, i) => {
                    return <Shoespage shoesone={shoe} key={i} i={i}/>
                })}        
                </div>
            </div>
            <Button variant="primary" onClick={() => {
                 axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((result) => {
                        setNewshoes([...newshoes, ...result.data])  
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }}>더보기</Button>
        </div>
    );
};

export default Junbocard;