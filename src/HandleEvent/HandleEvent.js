import React, { Component } from 'react'

export default class HandleEvent extends Component {
    // property


    // method
    showNoti = () => {
        alert('yes youclick');
    };

    funcShowNoti = (mess) => {
        alert(mess);
    };

    closureShowNoti = (mes) => {
        return function () {
            alert(mes);
        }
    }

    render() {
        return (
            <div>
                {/* goi truc tiep */}
                <button onClick={this.showNoti}>Click here!</button>

                {/* goi ham thong qua ham */}
                <button onClick={() => this.funcShowNoti('ss')}>Click here 1!</button>

                {/* mota callback */}
                <button onClick={this.closureShowNoti('show gi o day')}>Click here 2!</button>
            </div>
        )
    }
}
