// khởi tạo giá trị ban đầu của store
const stateGioHang = {
    gioHang: [],
}

const GioHangReducer = (state = stateGioHang, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            // cap nhật lại state
            let GHUpdate = [...state.gioHang];

            //xuly
            const index = GHUpdate.findIndex(sp => sp.maSP === action.spGH.maSP);
            if (index !== -1) {
                GHUpdate[index].soLuong += 1;
            } else {
                GHUpdate.push(action.spGH);
            }
            state.gioHang = GHUpdate;
            return { ...state };
        }
        case 'XOA_SP_GIO_HANG': {
            // gán giỏ hàng
            let GHUpdate = [...state.gioHang];
            const index = GHUpdate.findIndex(sp => sp.maSP === action.maSPClick);
            if (index !== -1) {
                GHUpdate.splice(index, 1);
            }
            // gán lại giỏ hàng chính
            state.gioHang = GHUpdate;
            return { ...state }
        }
        case 'TANG_GIAM_SL': {
            // gán giỏ hàng
            let GHUpdate = [...state.gioHang];
            const index = GHUpdate.findIndex(sp => sp.maSP === action.maSPClick);
            if (index !== -1) {
                if (action.status) {
                    GHUpdate[index].soLuong += 1;
                } else {
                    if (GHUpdate[index].soLuong > 1) {
                        GHUpdate[index].soLuong -= 1;
                    }
                }
            }
            // gán lại giỏ hàng chính
            state.gioHang = GHUpdate;
            return { ...state }
        }
    }

    return { ...state }
}

export default GioHangReducer;
