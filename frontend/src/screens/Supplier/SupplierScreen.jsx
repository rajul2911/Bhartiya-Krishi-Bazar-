import React from 'react'
import {
    Container,
} from 'react-bootstrap';
import Meta from '../../components/Helmet/Meta';
import AddSupplierProduct from '../../components/SupplierProduct/AddSupplierProduct';
import './supplierStyles.css'

const SupplierScreen = () => {
    return (
        <Container className='supplierContainer'>
            <Meta
                title="Agroic | Supplier"
            />
            <h1 className='title'>SUPPLIER</h1>
            <h4 className="supplier-title">
                Sell your wide variety of crops, through our platform. We have millions of Buyers connected from all parts of country.</h4>
            <br />
            <AddSupplierProduct />
        </Container>
    )
}

export default SupplierScreen