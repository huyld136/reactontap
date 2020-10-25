import React, { Component } from 'react'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'
import ModalGioHangRedux from './ModalGioHangRedux'
import data from './data.json'

export default class BTGioHangRedux extends Component {

    //render ds sp
    renderSP = () => {
        return data.map((sp, index) => {
            return (
                <div className="col-4" key={index}>
                    <DanhSachSanPhamRedux sanPham={sp}/>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="container">
                <h3 class="text-danger text-center">Bài Tập Giở Hàng Redux</h3>
                <ModalGioHangRedux />
                <div className="row">
                    {this.renderSP()}
                </div>
            </div>
        )
    }
}
