import React, { Component } from 'react'
import IconRed from '../assets/img/icon-red.jpg'
import IconBlack from '../assets/img/icon-black.jpg'
import IconSilver from '../assets/img/icon-silver.jpg'
import IconSteel from '../assets/img/icon-steel.jpg'
import RedCar from '../assets/img/red-car.jpg'
import BlackCar from '../assets/img/black-car.jpg'
import SilverCar from '../assets/img/silver-car.jpg'
import SteelCar from '../assets/img/steel-car.jpg'

class changeColorCar extends Component {
    state = {
        carImage: RedCar,
    };
    // create 1 function onChangeColorCar: C1
    onChangeColorCar = (img) => () => {
        this.setState(
            {
                carImage: img,
            }, 
            
            () => {
                console.log(this.state.carImage); // Kiểm tra carImg
            }
        );
    }
    // create 1 function onChangeColorCar: C2
    onChangeColorCar1 = (img) => () => {
        const logState = () => {
            console.log(this.state.carImage); // Kiểm tra carImg
        }

        this.setState(
            {
                carImage: img,
            }, logState
        );
    }

    render() {
        return (
            <div className="container">
                <h2>----------Change Color Car----------</h2>
                <div className="row">
                    <div className="col-9">
                        <img src={this.state.carImage} alt="car" className="w-100 rounded" />
                    </div>
                    <div className="col-3">
                        <img className="p-1 w-25 d-block" onClick={this.onChangeColorCar(RedCar)} src={IconRed} alt="" />
                        <img className="p-1 w-25 d-block" onClick={this.onChangeColorCar1(BlackCar)} src={IconBlack} alt="" />
                        <img className="p-1 w-25 d-block" onClick={this.onChangeColorCar(SilverCar)} src={IconSilver} alt="" />
                        <img className="p-1 w-25 d-block" onClick={this.onChangeColorCar1(SteelCar)} src={IconSteel} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default changeColorCar;