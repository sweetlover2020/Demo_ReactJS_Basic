import React, { Component } from 'react'
import HeaderContact from '../components/header'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h1>This is Contact Page</h1>
                <p>Contact to me</p>
                <HeaderContact />
            </div>
        )
    }
}