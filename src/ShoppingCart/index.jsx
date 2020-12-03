import { findAllByAltText } from '@testing-library/react';
import React, { Component } from 'react';
import Cart from './cart';
import Detail from './detail';
import Header from './header';
import ProductList from './productList';

class ShopingHome extends Component {
    products = [{
        id: "sp_1",
        name: "iphoneX",
        price: 30000000,
        screen: "screen_1",
        backCamera: "backCamera_1",
        frontCamera: "frontCamera_1",
        img: "https://sudospaces.com/mobilecity-vn/images/2019/12/iphonex-black.jpg",
        desc: "iPhone X features a new all-screen design. Face ID, which makes your face your password",
    }, 
    { id: "sp_2", name: "Note 7", price: 20000000, screen: "screen_2", backCamera: "backCamera_2", frontCamera: "frontCamera_2", img: "https://www.xtmobile.vn/vnt_upload/product/01_2018/thumbs/600_note_7_blue_600x600.png", desc: "The Galaxy Note7 comes with a perfectly symmetrical design for good reason", }, 
    { id: "sp_3", name: "Vivo", price: 15000000, screen: "screen_3", backCamera: "backCamera_3", frontCamera: "frontCamera_3", img: "https://www.gizmochina.com/wp-content/uploads/2019/11/Vivo-Y19.jpg", desc: "A young global smartphone brand focusing on introducing perfect sound quality", }, 
    { id: "sp_4", name: "Blacberry", price: 17000000, screen: "screen_4", backCamera: "backCamera_4", frontCamera: "frontCamera_4", img: "https://cdn.tgdd.vn/Products/Images/42/194834/blackberry-keyone-3gb-600x600.jpg", desc: "BlackBerry is a line of smartphones, tablets, and services originally designed" }
]

    state = {
        selectedProduct: null,
        cart: []
    }

    getProduct = (prodFromItem) => {
        console.log(prodFromItem);
        this.setState({
            selectedProduct: prodFromItem
        })
    }

    addToCart = (prodFromItem) => {
        // spread operator
        const cloneCart = [...this.state.cart];
        const cartItem = {
            product: prodFromItem,
            quantity: 1,
        }

        // Check product exist in cart
        const index = cloneCart.findIndex( (item) => {
            return item.product.id === prodFromItem.id
        })

        if(index !== -1) {
            cloneCart[index].quantity++;
        } else {
            cloneCart.push(cartItem);
        }

        // cloneCart.push(cartItem);

        this.setState({
            cart: cloneCart
        })
    }

    // truthy
    // falsy: 0, "", undefind, false

    render() {
        return (
            <>
                <Header />
                <ProductList addToCart={this.addToCart} getProduct={this.getProduct} newProducts={this.products} />
                {/* Fix lỗi c2:  */}
                {this.state.selectedProduct && <Detail product={this.state.selectedProduct} />}
                <Cart cart={this.state.cart} />
            </>
        );
    }
}

export default ShopingHome;