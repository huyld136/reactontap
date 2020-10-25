import React, { Component } from 'react'
import {connect} from 'react-redux'

class DanhSachSanPhamRedux extends Component {


    render() {
        const {sanPham} = this.props;
        return (
            <div className="card text-left">
                <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.tenSP} />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <button className="btn btn-success">Xem chi tiết</button>
                    <button className="btn btn-danger" onClick={()=>{this.props.themGioHang(sanPham)}}>Thêm SP</button>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang : (spCLick) => {
            let spGH = {...spCLick, soLuong: 1};
            let action = {
                type: "THEM_GIO_HANG",
                spGH:spGH,
            };
            dispatch(action);
        }
    }
}


// connect store
export default connect(null, mapDispatchToProps)(DanhSachSanPhamRedux);
