import React, { Component } from 'react'
import {connect} from 'react-redux'

class Player extends Component {
    render() {
        let {mangDatCuoc} = this.props;

        return (
            <div className="playerGame">
                <div className="theThink">
                    <img src={mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} alt={mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} style={{ height: 70, transform: 'rotate(120deg)', }} />

                </div>
                <div className="speech-bubble"></div>
                <img src="./img/gameOanTuTi/player.png" alt="./img/gameOanTuTi/player.png" style={{ height: 150, }} />

                <div className="row">
                {mangDatCuoc.map((item, index) => {

                    let classChoosed = {};
                    if(item.datCuoc) {
                        classChoosed = {border:'3px solid orange',outline:0}
                    }

                    return <div className="col-4" key={index}>
                    <button style={classChoosed} onClick={() => {this.props.handleDatCuoc(item)}} className="btnItem">
                        <img src={item.hinhAnh} alt={item.hinhAnh} className="img-fluid" />
                    </button>
                </div>
                })};

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuTiReducer.mangDatCuoc,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDatCuoc : (mangdatcuoc) => {
            dispatch({
                type: 'XL_DAT_CUOC',
                mangdatcuoc,
            });
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);
