import React, { Component } from 'react';
import './BaiTapBookingTicked.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import dataGhe from './danhSachGhe.json';
import HangGhe from './HangGhe';

export default class BaiTapBookingTicked extends Component {

    renderHangGhe = () => {
        return dataGhe.map((hangGhe, index) => {
            return <div key={index} className="d-flex text-light justify-content-between align-items-center">
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        });
    }

    render() {
        return (
            <div className="bookingMovie" style={{ backgroundImage: "url('./img/bookingTicked/bgmovie.jpg')", position: 'fixed', width: '100%', height: '100%', backgroundSize: '100%' }}>
                <div style={{ position: 'fixed', width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)' }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 text-light">
                                <div>
                                    <div className="text-warning display-4 text-center">DAT VE XEM PHIM</div>
                                    <div style={{ fontSize: "25px", textAlign: "center" }} className="mt-3 mb-1">Man Hinh</div>
                                    <div className="d-flex flex-column justify-content-center align-items-center" >
                                        <div className="screen" ></div>
                                        <div style={{ width: '90%' }}>
                                            {this.renderHangGhe()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-light">
                                <div style={{ fontSize: '30px' }}>DANH SACH GHE BAN CHON</div>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
