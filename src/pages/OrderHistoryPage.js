import React, { Component } from 'react';
import Profile from './components/profileComponent/Profile';
import ProfilePageNav from './components/profileComponent/ProfilePageNav';
import TicketHistory from './components/Ticket/TicketHistory';
import Header from './components/Header';
import Footer from './components/Footer';



export default class OrderHistoryPage extends Component {
    render() {
        return (
            <div>
                <Header nav1="Home" nav2="List Movie"/>
                <section className='px-5 lg:grid lg:grid-cols-[400px_minmax(0px,_1fr)_1px] lg:p-10'>
                    <div>
                        <Profile />
                    </div>
                    <div className='flex flex-col gap-10 rounded-[8px] bg-[#DEDEDE]'>
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
            </div>
        )
    };
};


