import React, { Component } from 'react';
import CartItem from './cartItem';

class Cart extends Component {
    renderCart = () => {
        return this.props.cart.map((item) => {
            // console.log(item);
            return (
                <div>
                    <CartItem itemDetail={item} />
                </div>
            )
        })
    }

    render() {
        return (

            // JSS / SCSS 

            <div className="modal fade" id="cart" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document" style={{maxWidth: 800}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Giỏ hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <tr>
                                    <td>Mã sản phẩm</td>
                                    <td>Hình ảnh</td>
                                    <td>Tên sản phẩm</td>
                                    <td>Số lượng</td>
                                    <td>Đơn giá</td>
                                    <td>Thành tiền</td>
                                </tr>
                                {this.renderCart()}
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cart;