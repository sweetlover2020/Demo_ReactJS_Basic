import React, { Component } from 'react';

class CartItem extends Component {

    render() {
        console.log(this.props.itemDetail);
        const { quantity, product } = this.props.itemDetail;
        return (
            <tr>
                <td>{quantity}</td>
                <td>
                    <img src="" alt="product" />
                </td>
                <td>{product.name}</td>
                <td>
                    <button className="btn btn-info">+</button>
                    <button className="btn btn-info">- </button>
                </td>
                <td>{product.price}</td>
                <td>{product.product * quantity}</td>
            </tr>
        );
    }
}

export default CartItem;