import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-4 col-lg-3 d-md-block bg-light sidebar collapse">
                        <SideBar />
                    </nav>
                    <main role="main" class="col-md-8 col-lg-9">
                        <Content />
                    </main>
                </div>
                <Footer />
            </div>
        )
    }
}
