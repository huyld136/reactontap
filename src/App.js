import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaiTapThucHanhLayout from './BaiTapThucHanhLayout/BaiTapThucHanhLayout';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import BaiTapGioHang from './BaiTapGioHang';
import BTGioHangRedux from './compnents/BaiTapRedux/BaiTapGioHang/BTGioHangRedux';
import BaiTapOanTuTi from './BaiTapOanTuTi/BaiTapOanTuTi';
import BaiTapBookingTicked from './BaiTapBookingTicked/BaiTapBookingTicked';

function App() {
  return (
    <div className="App">
      {/* <BaiTapThucHanhLayout /> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      {/* <BaiTapGioHang /> */}
      {/* <BTGioHangRedux /> */}
      {/* <BaiTapOanTuTi /> */}
      <BaiTapBookingTicked />
    </div>
  );
}

export default App;
