import React, { Component } from 'react';

class ProductItem extends Component {
    onViewDetail = () => {
        this.props.getProduct(this.props.cartProduct)
    }

    onAddToCart = () => {
        this.props.addToCart(this.props.cartProduct)
    }

    render() {
        const {name, img,} = this.props.cartProduct;
        return (
            <div>
                <img src={img} alt="product" style={{width: 200}} />
                <div className="card-body">
                    <h1>{name}</h1>
                    <button className="btn btn-success" onClick={this.onViewDetail} >Xem chi tiết</button>
                    <button className="btn btn-info" onClick={this.onAddToCart}>Thêm giỏ hàng</button>
                </div>
            </div>
        );
    }
}

export default ProductItem;