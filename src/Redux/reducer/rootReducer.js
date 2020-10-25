import { combineReducers } from 'redux'
import GioHangReducer from './GioHangReducer'
import BaiTapOanTuTiReducer from './BaiTapOanTuTiReducer'


//store tổng
export const rootReducer = combineReducers({
    //Nơi chứa các reducer cho nghiệp vụ
    GioHangReducer: GioHangReducer,
    BaiTapOanTuTiReducer:BaiTapOanTuTiReducer,
})
