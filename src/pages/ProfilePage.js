import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Profile from './components/profileComponent/Profile'
import ProfilPageNav from './components/profileComponent/ProfilePageNav'
import DetailsInformation from './components/profileComponent/DetailsInformation'
import AccountAndPrivacy from './components/profileComponent/AccountAndPrivacy'







export default class ProfilePage extends Component {
    render() {
        return (
            <>
                <Header nav1="Home" nav2="List Movie"/>
                <section className='p-5 md:grid md:grid-cols-[400px_minmax(0px,_1fr)_00px] md:p-10 md:gap-5 lg:grid lg:grid-cols-[400px_minmax(750px,_1fr)_100px] lg:p-10'>
                    <div>
                        <Profile />
                    </div>
                    <div>
                        <ProfilPageNav />
                        <div className=''>
                            <DetailsInformation />
                            <AccountAndPrivacy />
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}
