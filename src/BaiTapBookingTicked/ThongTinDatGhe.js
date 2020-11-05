import React, { Component } from 'react'
import { connect } from 'react-redux'
import {huyGheAction} from '../Redux/actions/BookingTickedAction'

class ThongTinDatGhe extends Component {

    renderGheDangChon = () => {
        return this.props.danhSachGheDangDat.map((ghe, index) => {
            return <tr className="text-light" key={index}>
                <td>{ghe.soGhe}</td>
                <td>{ghe.gia.toLocaleString()}</td>
                <td>
                    <button onClick={() => { this.props.handleXoa(ghe.soGhe) }} className="btn btn-danger">Xoa</button>
                </td>
            </tr>
        });
    }

    renderTongTien = () => {
        return this.props.danhSachGheDangDat.reduce((tongtien,ghe,index) => {
            return tongtien += ghe.gia;
        },0);
    }

    render() {
        return (
            <div>
                <div className="mt-5">
                    <button className="gheDuocChon mr-2"></button>
                    <span className="text-light" style={{ fontSize: '25px' }}>Ghe Da Dat</span>
                    <br />
                    <button className="gheDangChon mr-2"></button>
                    <span className="text-light" style={{ fontSize: '25px' }}>Ghe Dang Dat</span>
                    <br />
                    <button className="ghe mr-2" style={{ marginLeft: '0' }}></button>
                    <span className="text-light" style={{ fontSize: '25px' }}>Ghe Chua Dat</span>
                </div>
                <div className="mt-5">
                    <table className="table" border="2">
                        <thead>
                            <tr className="text-light" style={{ fontSize: "20px" }}>
                                <th>So Ghe</th>
                                <th>Gia</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderGheDangChon()}
                        </tbody>
                        <tfoot>
                            <tr className="text-warning">
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.renderTongTien().toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapBookingTickedReducer.danhSachGheDangDat,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleXoa: (soghe) => {
            dispatch(huyGheAction(soghe));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
