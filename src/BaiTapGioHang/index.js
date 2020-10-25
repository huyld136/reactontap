import React, { Component } from 'react'
import SanPham from './SanPham'
import dataSP from './data.json'
import Modals from './Modals'

export default class BaiTapGioHang extends Component {

    // property
    state = {
        sanPHamChiTiet: {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },
        cartList: []
    }
    // method

    changeSanPhamChiTiet = (sanPHamChiTiet) => {
        this.setState({ sanPHamChiTiet });
    }

    renderSanPhamChiTiet = () => {
        return dataSP.map((sanpham, index) => {
            return (
                <div className="col-sm-4" key={index}>
                    <SanPham SanPhamChiTiet={sanpham} changeSanPhamChiTiet={this.changeSanPhamChiTiet} handleCartList={this.handleCartList} />
                </div>
            );
        });
    }

    handleCartList = (sanpham) => {

        //tăng số lượng
        const index = this.state.cartList.findIndex((cartitem) => {
            return cartitem.maSP === sanpham.maSP;
        });

        let cartList = [...this.state.cartList];
        if (index !== -1) {
            this.state.cartList[index].soLuong += 1;
        } else {
            const newSanPham = { ...sanpham, soLuong: 1 }
            cartList = [...cartList, newSanPham]
        }

        this.setState({
            cartList,
        });
    }
    renderSoLuong = () => {
        return this.state.cartList.reduce((tongsl, sl) => {
            return tongsl + sl.soLuong;
        }, 0);
    }

    render() {
        return (
            <section className="container">
                <h3 className="title text-center">Bài tập giỏ hàng</h3>
                <div className="container text-center my-2">
                    <button
                        className="btn btn-danger "
                        data-toggle="modal"
                        data-target="#modelId"
                    >
                        Giỏ hàng ({this.renderSoLuong()})
                    </button>
                </div>
                <div className="container danh-sach-san-pham">
                    <div className="row">
                        {this.renderSanPhamChiTiet()}
                    </div>
                </div>
                <Modals cartList={this.state.cartList} />
                <div className="row">
                    <div className="col-sm-5">
                        <img
                            className="img-fluid"
                            src={this.state.sanPHamChiTiet.hinhAnh}
                            alt={this.state.sanPHamChiTiet.tenSP}
                        />
                    </div>
                    <div className="col-sm-7">
                        <h3>Thông số kỹ thuật</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{this.state.sanPHamChiTiet.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{this.state.sanPHamChiTiet.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{this.state.sanPHamChiTiet.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{this.state.sanPHamChiTiet.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{this.state.sanPHamChiTiet.ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{this.state.sanPHamChiTiet.rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
}
