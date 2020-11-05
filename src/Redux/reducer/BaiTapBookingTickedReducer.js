import {DAT_GHE,XOA_GHE} from '../types/BookingTickedType'

const stateDefault = {
    danhSachGheDangDat: [
        // { soGhe: 'A1', gia: '1000000' },
    ]
}

const BaiTapBookingTickedReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DAT_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let indexGheDangDat = state.danhSachGheDangDat.findIndex(
                gheDangDat => gheDangDat.soGhe === action.ghe.soGhe
            );
            if (indexGheDangDat !== -1) {
                danhSachGheDangDatUpdate.splice(indexGheDangDat, 1);
            } else {
                danhSachGheDangDatUpdate.push(action.ghe);
            }

            state.danhSachGheDangDat = danhSachGheDangDatUpdate;

            return { ...state }

        }
        case XOA_GHE: {
            console.log(action.soghe);

            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(
                gheDangDat => gheDangDat.soGhe === action.soghe
            );
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;

            return { ...state }

        }
        default:
            return { ...state }
    }
}
export default BaiTapBookingTickedReducer;
