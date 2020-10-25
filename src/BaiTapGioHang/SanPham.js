import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let sanPham = this.props.SanPhamChiTiet;
        return (

            <div className="card">
                <img
                    className="card-img-top"
                    src={sanPham.hinhAnh}
                    alt={sanPham.tenSP}
                />
                <div className="card-body">
                    <h4 className="card-title">
                        {sanPham.tenSP}
                    </h4>
                    <button className="btn btn-success" onClick={() => { this.props.changeSanPhamChiTiet(sanPham) }}>
                        Chi tiết
                                    </button>
                    <button className="btn btn-danger" onClick={() => { this.props.handleCartList(sanPham) }}>
                        Thêm giỏ hàng
                                    </button>
                </div>
            </div>
        )
    }
}
