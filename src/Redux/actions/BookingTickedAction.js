import {DAT_GHE,XOA_GHE} from'../types/BookingTickedType'

export const datGheAction = (ghe) => {
    return {
        type: DAT_GHE,
        ghe
    }
}

export const huyGheAction = (soghe) => {
    return {
        type: XOA_GHE,
        soghe
    }
}
