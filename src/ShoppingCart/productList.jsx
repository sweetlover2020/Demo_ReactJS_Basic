import React, { Component } from 'react';
import ProductItem from './productItem';

class ProductList extends Component {
    renderProducts = () => {
      
        return this.props.newProducts.map((item) => {
            // console.log(item);
            return (    
                <div className="col-3" key={item.id}>
                    <ProductItem addToCart={this.props.addToCart} getProduct={this.props.getProduct} cartProduct={item} />
                </div>
            )
        })
        
    }
    
    render() {
        // console.log(this.props.newProducts);
        return (
            <div className="container">
                <h1 className="display-4 text-center">Danh sách sản phẩm</h1>
                <div className="row">
                    {this.renderProducts()}
                </div>
            </div>
        );
    }
}

export default ProductList;