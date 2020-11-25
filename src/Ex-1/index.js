import React, { Component } from 'react'
import Header from './header'
import Contents from './contents'
import Sidebar from './sidebar'
import Footer from './footer'

export class Ex1 extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="d-flex">
                    <div className="w-75">
                        <Contents />
                    </div>
                    <div className="w-25">
                        <Sidebar />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Ex1;
