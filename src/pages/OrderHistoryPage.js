import React, { Component } from 'react';
import Profile from './component/profileComponent/Profile';
import ProfilePageNav from './component/profileComponent/ProfilePageNav';
import TicketHistory from './component/Ticket/TicketHistory';
import Header from './component/Header';
import Footer from './component/Footer';



export default class OrderHistoryPage extends Component {
    render() {
        return (
            <>
                <Header nav1="Home" nav2="List Movie"/>
                <section className='grid grid-cols-[400px_minmax(750px,_1fr)_100px] p-10'>
                    <div>
                        <Profile />
                    </div>
                    <div className='flex flex-col gap-10'>
                        <ProfilePageNav />
                        <TicketHistory
                            date="Tuesday, 07 July 2020 - 04:30pm"
                            image={require('../Assets/Image/cineOne21.png')}
                            title='Spider-Man: Homecoming'
                            ticket='Active'
                            />
                        <TicketHistory
                            date="Tuesday, 07 July 2020 - 04:30pm"
                            image={require('../Assets/Image/cineOne21.png')}
                            title='Spider-Man: Homecoming'
                            ticket='Active'
                            />
                        <TicketHistory
                            date="Tuesday, 07 July 2020 - 04:30pm"
                            image={require('../Assets/Image/cineOne21.png')}
                            title='Spider-Man: Homecoming'
                            ticket='Active'
                            />
                    </div>
                </section>
                <Footer />
            </>
        )
    };
};


