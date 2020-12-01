import React, {useState} from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import Shoespage from '../shoespage'

import data from '../data'

const Junbocard = (props) => {
    
    const [shoes, setShoes] = useState(data)

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
                {shoes.map((shoe, i) => {
                    return <Shoespage shoesone={shoe} key={i} i={i}/>
                })}        
                </div>
            </div>
        </div>
    );
};

export default Junbocard;