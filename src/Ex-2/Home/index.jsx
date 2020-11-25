import React, { Component } from "react";
import Header from '../Header'
import Carousel from '../Carousel'
import Contents from '../Contents'
import Footer from '../Footer'

class HomeEx2 extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
                <Contents/>
                <Footer/>
            </div>
        );
    }
}

export default HomeEx2;
