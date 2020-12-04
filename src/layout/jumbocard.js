import React, {useState} from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import Shoespage from '../shoespage'
import axios from 'axios'


const Junbocard = ({shoes}) => {

    let [newshoes, setNewshoes] = useState(shoes)

    return (
        <div>
            <Jumbotron className="background">
                <h1>50% Sale</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.</p>
                <p><Button variant="primary">Learn more</Button></p>
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