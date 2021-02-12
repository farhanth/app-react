import React from 'react';
import './CSS/Product.css'

class Product extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub: "Buy",
            status: "Ready",
            disabled: false
        }
    }

    buyButton = () => {
        this.setState({
            stock: this.state.stock - 1
        });

        if (this.state.stock === 1) {
            this.setState({
                status: "Sold Out",
                disabled: true
            });
        }
    }

    render() {
        return (
            <div className="box-stock">
                <h2>{this.props.product_name}</h2>
                <img src="https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/laptops/Apple_MacBook_Pro_13_Non_Touch_Bar_2017/Apple_MacBook_Pro_13_Non_Touch_Bar_2017_L_1.jpg" alt="Product Image" />
                <p>{this.props.price}</p>
                <p>{this.state.stock}</p>
                <button className="btn-click" onClick={this.buyButton} disabled={this.state.disabled}>Buy</button>
                <p>{this.state.status}</p>
            </div>
        );
    }
}

export default Product;