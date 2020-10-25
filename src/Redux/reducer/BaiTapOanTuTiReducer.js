
const stateDefault = {
    mangDatCuoc : [
        {ma:'keo',hinhAnh:'./img/GameOanTuTi/keo.png',datCuoc:true},
        {ma:'bua',hinhAnh:'./img/GameOanTuTi/bua.png',datCuoc:false},
        {ma:'bao',hinhAnh:'./img/GameOanTuTi/bao.png',datCuoc:false},
    ],
    ketQua: 'Win',
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma:'keo',hinhAnh:'./img/GameOanTuTi/keo.png',datCuoc:true}
}

const BaiTapOanTuTiReducer = (state=stateDefault, action) => {
    switch (action.type) {
        case 'XL_DAT_CUOC':{
            let mangDatCuocUpdate = [...state.mangDatCuoc];
            mangDatCuocUpdate = mangDatCuocUpdate.map((item, index)=>{
                return {...item,datCuoc:false}
            });
            let index = mangDatCuocUpdate.findIndex(item => item.ma === action.mangdatcuoc.ma);
            if(index !== -1) {
                mangDatCuocUpdate[index].datCuoc = true;
            }
            state.mangDatCuoc = mangDatCuocUpdate;
            return {...state}
        }; break;
        case 'RANDOM':{
            let soRandom = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soRandom];
            state.computer = quanCuocNgauNhien;

        }; break;
        case 'END_GAME':{
            state.soBanChoi ++;
            // tìm player : mangDatCuoc có datCuoc:true
            let player = state.mangDatCuoc.find(item=>item.datCuoc === true);
            let computer = state.computer;

            //so sánh player với computer để in ra KQ
            switch(player.ma) {
                case 'keo' :
                    if(computer.ma === 'keo'){
                        state.ketQua = 'hòa!!!';
                    } else if(computer.ma === 'bua') {
                        state.ketQua = 'thua sml ;(';
                    } else {
                        state.ketQua = 'you win!';
                        state.soBanThang ++;
                    }
                break;
                case 'bua' :
                    if(computer.ma === 'keo'){
                        state.ketQua = 'you win!';
                        state.soBanThang ++;
                    } else if(computer.ma === 'bua') {
                        state.ketQua = 'hòa!!!';
                    } else {
                        state.ketQua = 'thua sml ;(';
                    }
                break;
                case 'bao' :
                    if(computer.ma === 'keo'){
                        state.ketQua = 'thua sml ;(';
                    } else if(computer.ma === 'bua') {
                        state.ketQua = 'you win!';
                        state.soBanThang ++;
                    } else {
                        state.ketQua = 'hòa !!!';
                    }
                break;
                default:
                    state.ketQua = 'you win!';
                    state.soBanThang ++;
            }
        }; break;
        default:
            return {...state}
    }
    return {...state}
}

export default BaiTapOanTuTiReducer;
