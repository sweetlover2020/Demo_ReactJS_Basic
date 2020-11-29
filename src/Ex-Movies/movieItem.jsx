import React, { Component } from 'react';

class MovieItem extends Component {
    render() {
        // props là 1 object có Component, nó dùng để hứng data truyền từ cha sang
        // console.log(this.props.movie);
        
        // Destructuring: Bốc tách phần tử
        const {hinhAnh: img, tenPhim, moTa} = this.props.movie;
        return (
            <div className="card mt-1">
                <img src={img} alt="movie Item" />
                <div className="card-body">
                    <h1>{tenPhim}</h1>
                    <p>
                        {moTa}
                    </p>
                </div>
            </div>
        );
    }
}

export default MovieItem;