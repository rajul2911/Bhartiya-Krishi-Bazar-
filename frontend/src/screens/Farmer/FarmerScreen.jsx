import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Container,
    Row,
    CardDeck,
    Card,
    Button
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Meta from '../../components/Helmet/Meta';
import './FarmerStyle.css'

const FarmerScreen = () => {
    return (
        <div>
            <Meta
                title="Agroic | Farmers"
            />
            <Container className='farmerContainer'>
                <h1 className='title'>FARMER</h1>
                <h4 className="farmer-title">If you are a farmer then you are at perfect platfrom from where you can order all of your farming related products and you can sell your production also.</h4>
                <Row className="row-one justify">
                    <CardDeck>
                        <AllCard></AllCard>                        
                    </CardDeck>
                </Row>
            </Container>
        </div>
    )
}


function AllCard() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(`/api/supplier`);
                setDatas(data); // Set the fetched data into state
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []); // Empty dependency array to run only once on component mount

    return (
        <div>
            {datas.map((data) => (
                <div key={data._id}>
                    <Card border="primary" style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title className="card-titile">{data.name}</Card.Title>
                            <h5>{data.address}</h5>
                            <h5>{data.cropSelection}</h5>
                            <LinkContainer to="/farmers/purchaseSeeds">
                                <Button className="btn-explore btn-md m-2">CONNECT</Button>
                            </LinkContainer>
                            <NavigateButton></NavigateButton>
                            <PaymentButton></PaymentButton>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>

    );
}
const NavigateButton = () => {
    const handleClick = () => {
        window.location.href = 'http://localhost:5001';
    };

    return (
        <button onClick={handleClick}>
            Sign Contract
        </button>
    );
};

const PaymentButton = () => {
    const handleClick = () => {
        window.location.href = 'http://localhost:5002';
    };

    return (
        <button onClick={handleClick}>
            Pay
        </button>
    );
};
export default FarmerScreen
