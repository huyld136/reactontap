import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {

    render() {

        let keyframe = `@keyframes randomItem${Date.now()}{
            0%{top:-50px;}
            25%{top:100px;}
            50%{top:-50px;}
            75%{top:100px;}
            100%{top:0;}
        }`

        let {computer} = this.props;
        return (
            <div className="playerGame">
                <style>
                    {keyframe}
                </style>
                <div className="theThink">
                    <img style={{
                        position:'absolute',
                        left: '30%',
                        animation: `randomItem${Date.now()} 0.5s`,
                        height: 70,
                        transform: 'rotate(120deg)'
                    }} src={computer.hinhAnh} alt={computer.hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img src="./img/gameOanTuTi/playerComputer.png" alt="./img/gameOanTuTi/playerComputer.png" style={{ height: 150, }} />

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        computer: state.BaiTapOanTuTiReducer.computer,
    }
}

export default connect(mapStateToProps)(Computer);
