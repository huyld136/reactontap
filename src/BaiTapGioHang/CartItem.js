import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        let cartItem = this.props.cartItem;
        return (
            <>
                <td>{cartItem.maSP}</td>
                <td>{cartItem.tenSP}</td>
                <td><img src={cartItem.hinhAnh} width={50} /></td>
                <td>{cartItem.soLuong}</td>
                <td>{cartItem.giaBan}</td>
                <td>{cartItem.giaBan * cartItem.soLuong}</td>
            </>
        )
    }
}
