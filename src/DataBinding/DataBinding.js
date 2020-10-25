import React, { Component } from 'react'

export default class DataBinding extends Component {
    // thuộc tính
    sinhVien = {
        maSV: "msv01",
        tenSV: 'Le dang huy',
        lop: '13'
    }

    renderSV = () => {
        return (
            <ul>
                <li>Ma SV: {this.sinhVien.maSV}</li>
                <li>Tên SV: {this.sinhVien.tenSV}</li>
                <li>Lop: {this.sinhVien.lop}</li>
            </ul>
        );
    }

    render() {
        return (
            <>
                {/* // binding property */}
                <ul>
                    <li>Ma SV: {this.sinhVien.maSV}</li>
                    <li>Tên SV: {this.sinhVien.tenSV}</li>
                    <li>Lop: {this.sinhVien.lop}</li>
                </ul>
                <hr />
                {/* binding method */}
                {this.renderSV()}
            </>
        )
    }
}
