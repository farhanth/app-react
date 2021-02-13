import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const DetailComp = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">{props.location.state.title}!</h1>
                <p className="lead">{props.location.state.post_date}</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    );
};

export default DetailComp;