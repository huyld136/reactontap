import React, { Component } from 'react';
import { connect } from 'react-redux'
import {datGheAction} from '../Redux/actions/BookingTickedAction'

class HangGhe extends Component {

    renderDanhSachGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let classRowNumber = (this.props.soHangGhe === 0) ? 'rowNumber' : '';
            let cssGheDaDat = '';
            let disabled = false;

            //Trang thai ghe da dat
            let cssGheDangChon = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
                gheDangChon => gheDangChon.soGhe === ghe.soGhe
            );
            if (indexGheDangDat !== -1) {
                cssGheDangChon = 'gheDangChon';
            }

            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disabled = true;
            }

            //Xet trang thai ghe dang dat

            return <button key={index} onClick={() => this.props.datGhe(ghe)} disabled={disabled} className={`m-2 d-flex align-items-center justify-content-center ghe ${cssGheDaDat} ${classRowNumber} ${cssGheDangChon}`} style={{ minWidth: '45px' }}>
                {ghe.soGhe}
            </button>
        });
    }
    render() {

        return (
            <>
                <span className="d-flex justify-content-center" style={{ minWidth: '45px' }}>{this.props.hangGhe.hang}</span>
                {this.renderDanhSachGhe()}
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.BaiTapBookingTickedReducer.danhSachGheDangDat,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
