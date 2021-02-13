import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardComp = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://placeimg.com/640/480/tech" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{props.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.post_date}</CardSubtitle>
                    <CardText>{props.title}</CardText>
                    <Link to={
                        {
                            pathname: `/detail/${props.id}`,
                            state: {
                                title: props.title,
                                post_date: props.post_date
                            }
                        }
                    }>
                        <Button>Read More</Button>
                    </Link>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardComp;