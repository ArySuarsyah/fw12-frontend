import React, { Component } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Profile from './component/profileComponent/Profile'
import ProfilPageNav from './component/profileComponent/ProfilePageNav'
import DetailsInformation from './component/profileComponent/DetailsInformation'
import AccountAndPrivacy from './component/profileComponent/AccountAndPrivacy'







export default class ProfilePage extends Component {
    render() {
        return (
            <>
                <Header nav1="Home" nav2="List Movie"/>
                <section className='grid grid-cols-[400px_minmax(750px,_1fr)_100px] p-10'>
                    <div>
                        <Profile />
                    </div>
                    <div>
                        <ProfilPageNav />
                        <DetailsInformation />
                        <AccountAndPrivacy />
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}
