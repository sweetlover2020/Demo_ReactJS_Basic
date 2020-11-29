import React, { Component } from 'react';

class Databinding extends Component {
    // Biến
    fullName = "Đặng Phúc Minh";
    age = 12;

    // Hàm bình thường
    showName() {
        alert('Dang Phuc Minh');
    }

    // Hàm có tham số đầu vào: C1
    showNameWithParams1 = (name) => {
        // closure
        return function () {
            alert(name);
        }
    }
    // Hàm có tham số đầu vào: C2
    showNameWithParams2 = (name) => function () {
        alert(name);
    }
    // Hàm có tham số đầu vào: C3
    showNameWithParams3 = (name) => () => {
        alert(name);
    }

    // Hàm có con trở this: C1 - Bị lỗi undifind ở con trở this
    showNameWithThis1() {
        alert(this.fullName);
    }
    // Hàm có con trở this: C2 - Chạy bình thường
    showNameWithThis2 = () => {
        alert(this.fullName);
    }

    // Ẩn hiện phần tử
    state = {
        isOke : true,
    }
    decideDestination = () => {
        if (this.state.isOke) {
            return <h1>Go to Cybersoft</h1>
        } else {
            return <h1>Go to Cybercore</h1>;
        }
    }
    onChangeIsOke = (val) => () => {
        this.setState({
            isOke: val,
        });
        // console.log(this.isOke); // Test isOke
    }



    render() {
        return (
            <div>
                <button onClick={this.showNameWithThis2} className="btn btn-primary">Show Name with This</button><br />
                <button onClick={this.showNameWithParams3("Minh")} className="btn btn-secondary">Show Name with Params</button><br />
                <button onClick={this.showName} className="btn btn-success">Show Name</button>
                <h1>Thông tin</h1>
                <h2>{this.fullName}</h2>
                <h2>{this.age}</h2>

                <h1>----------Scedule----------</h1>
                <button onClick={this.onChangeIsOke(true)} className="btn btn-info">Oke</button>
                <button onClick={this.onChangeIsOke(false)} className="btn btn-warning">Sick</button>
                {/* Hiển thị đối tượng tương ứng với button */}
                {this.decideDestination()}
            </div>
        );
    }
}

export default Databinding;