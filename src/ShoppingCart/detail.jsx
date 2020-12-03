import React, { Component } from 'react';

class Detail extends Component {
    render() {
        const {name, img, screen, backCamera, price} = this.props.product || {};
        // fix lỗi c1: ... = this.props.product || {};
        // fix lỗi c2: xem ben trang index
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h1>{name}</h1>
                        <img src={img} alt="product" style={{width: "100%"}} />
                    </div>
                    <div className="col-8">
                        <h1>Thông số kỹ thuật</h1>
                        <table className="table">
                            <tr>
                                <td>Màn hinh</td>
                                <td>{screen}</td>
                            </tr>
                            <tr>
                                <td>Camera sau</td>
                                <td>{backCamera}</td>
                            </tr>
                            <tr>
                                <td>Giá</td>
                                <td>{price}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;