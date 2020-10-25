import React, { Component } from 'react'

// Kết nối redux: (connect hàm kết nối reactComponent và reduxStore)
import { connect } from 'react-redux';

class ModalGioHangRedux extends Component {


    renderGioHang = () => {
        return this.props.gioHang.map((spGH, index) => {
            return (
                <tr key={index}>
                    <td>{spGH.maSP}</td>
                    <td>{spGH.tenSP}</td>
                    <td><img src={spGH.hinhAnh} width={75} alt={spGH.tenSP} /></td>
                    <td>{spGH.giaBan.toLocaleString()}</td>
                    <td>
                        <button className="btn btn-success" onClick={() => { this.props.handleTangGiamSL(spGH.maSP, false) }}>-</button>
                        {spGH.soLuong}
                        <button className="btn btn-success" onClick={() => { this.props.handleTangGiamSL(spGH.maSP, true) }}>+</button>
                    </td>
                    <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
                    <td><button className="btn btn-danger" onClick={() => { this.props.handleDel(spGH.maSP) }}>Xóa</button></td>
                </tr>
            );
        });
    }

    render() {
        //this.props.gioHang là thuộc tính nhận từ redux
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình ảnh</th>
                            <th>Giá bán</th>
                            <th>SL</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => { //state là store tổng => truy suất đến GioHangReducer
    // => biến state trên GioHangReducer
    return {
        gioHang: state.GioHangReducer.gioHang // tạo ra 1 props của component ModalGioHangRedux
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDel: (maSPClick) => {
            let action = {
                type: 'XOA_SP_GIO_HANG',
                maSPClick,
            }
            dispatch(action);
        },
        handleTangGiamSL: (maSPClick, status) => {
            let action = {
                type: 'TANG_GIAM_SL',
                maSPClick,
                status,
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux)
